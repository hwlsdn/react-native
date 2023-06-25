import { SafeAreaView, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems from "../components/RestaurantItems";
import { YELP_API_KEY } from "@env";
import Loading from "../components/Loading";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/BottomTabs";

const HomeScreen = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("SanFrancisco");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?location=${city}&term=restaurants&sort_by=best_match&limit=20`;

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
    setIsLoading(true);
    getRestaurantFromYelp().then(() => setIsLoading(false));
  }, [city, activeTab]);

  return (
    <SafeAreaView>
      <View>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        <Categories />
        <View>
          {isLoading ? (
            <Loading />
          ) : (
            <RestaurantItems restaurantData={restaurantData} />
          )}
        </View>
      </ScrollView>
      <Divider width={5} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default HomeScreen;
