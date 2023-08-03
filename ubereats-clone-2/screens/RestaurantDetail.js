import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 15 }} />
      <MenuItems />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetail;
