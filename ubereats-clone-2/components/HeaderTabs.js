import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const HeaderButton = ({ text, activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: activeTab === text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={{
          color: activeTab === text ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const HeaderTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
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
