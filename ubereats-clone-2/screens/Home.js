import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import { YELP_API_KEY } from "@env";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";

const Home = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?location=${city}&term=restaurants&sort_by=best_match&limit=30`;

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
              business.transactions.includes(activeTab.toLowerCase())
            )
          )
        );
    });
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <Categories />
      <ScrollView
        style={{ maxHeight: "70%" }}
        showsVerticalScrollIndicator={false}
      >
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
