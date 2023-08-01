import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "react-native-vector-icons";

const BottomTabs = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-between",
        marginHorizontal: 30,
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
};

const Icon = (props) => {
  return (
    <TouchableOpacity>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{ marginBottom: 3, alignSelf: "center" }}
      />
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
