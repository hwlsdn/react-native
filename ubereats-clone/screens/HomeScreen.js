import { SafeAreaView, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems from "../components/RestaurantItems";
import { YELP_API_KEY } from "@env";

const HomeScreen = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  const getRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?location=San%20Francisco&term=restaurants&limit=20`;

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
    getRestaurantFromYelp();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
