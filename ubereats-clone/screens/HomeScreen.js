import {
  SafeAreaView,
  ScrollView,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems from "../components/RestaurantItems";
import { YELP_API_KEY } from "@env";

const HomeScreen = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("SanFrancisco");
  const [isLoading, setIsLoading] = useState(false);

  const getRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?location=${city}&term=restaurants&sort_by=best_match&limit=20`;

    const apiOptions = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions).then((response) => {
      response.json().then((json) => setRestaurantData(json.businesses));
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getRestaurantFromYelp();
    setIsLoading(false);
  }, [city]);

  return (
    <SafeAreaView>
      <View>
        <HeaderTabs />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        <Categories />
        {isLoading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <RestaurantItems restaurantData={restaurantData} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
