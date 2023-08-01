import { StyleSheet, Text, View } from "react-native";
import React from "react";

const dummy_foods = [
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

const MenuItems = () => {
  return (
    <View>
      <View style={styles.menuItem}>
        <FoodInfo food={dummy_foods[0]} />
      </View>
    </View>
  );
};

const FoodInfo = (props) => {
  return (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={{ fontSize: 19, fontWeight: "600", marginBottom: 5 }}>
        {props.food.title}
      </Text>
      <Text>{props.food.description}</Text>
      <Text style={{ marginTop: 5 }}>{props.food.price}</Text>
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
});
