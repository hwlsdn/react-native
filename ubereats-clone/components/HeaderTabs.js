import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const HeaderButton = (props) => (
  <View>
    <TouchableOpacity>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  </View>
);

const HeaderTabs = () => {
  return (
    <View>
      <HeaderButton text="Delivery" />
      <HeaderButton text="Pickup" />
    </View>
  );
};

export default HeaderTabs;
