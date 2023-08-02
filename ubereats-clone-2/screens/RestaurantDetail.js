import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/restaurantDetail/MenuItems";

const RestaurantDetail = ({ route }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 15 }} />
      <MenuItems />
    </View>
  );
};

export default RestaurantDetail;
