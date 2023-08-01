import { StyleSheet, Text, View } from "react-native";
import React from "react";

const foods = [
  {
    title: "Cheese Burger",
    description: "With beef, cheddar cheese, lettuce, tomato and onion",
    price: "$15.99",
    image: require("../../assets/images/sample_menu/burger.jpg"),
  },
  {
    title: "Bolegnese Pasta",
    description: "Delicious pasta with bolognese sauce",
    price: "$19.99",
    image: require("../../assets/images/sample_menu/pasta.jpg"),
  },
  {
    title: "French Fries",
    description: "Crispy french fries",
    price: "$8.99",
    image: require("../../assets/images/sample_menu/frenchfries.jpg"),
  },
  {
    title: "Salad",
    description: "Fresh salad with lettuce, tomato and vinaigrette",
    price: "$9.99",
    image: require("../../assets/images/sample_menu/salad.jpg"),
  },
];

const MenuItem = () => {
  return (
    <View>
      <Text>MenuItem</Text>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
