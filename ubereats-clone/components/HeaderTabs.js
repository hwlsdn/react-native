import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const HeaderButton = (props) => (
  <View>
    <TouchableOpacity
      onPress={() => props.setActiveTab(props.text)}
      className={`bg-${
        props.activeTab === props.text ? "black" : "white"
      } py-3 px-7 rounded-2xl`}
    >
      <Text
        className={`text-${
          props.activeTab === props.text ? "white" : "black"
        } text-base font-semibold`}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);

const HeaderTabs = ({activeTab, setActiveTab}) => {

  return (
    <View className="flex-row justify-evenly">
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;
