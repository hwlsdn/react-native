import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
import { YELP_API_KEY } from "@env";

const Home = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?location=SanDiego&term=restaurants&sort_by=best_match&limit=20`;

    const apiOptions = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions).then((response) => {
      response
        .json()
        .then((json) =>
          setRestaurantData(
            json.businesses.filter((business) =>
              business.transactions.includes("delivery")
            )
          )
        );
    });
  };

  useEffect(() => {
    getRestaurantsFromYelp();
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

export default Home;
