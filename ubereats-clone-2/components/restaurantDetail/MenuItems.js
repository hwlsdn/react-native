import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ maxHeight: "45%" }}
    >
      {dummy_foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItem}>
            <BouncyCheckbox fillColor="green" />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo = (props) => {
  return (
    <View style={{flex: 1, justifyContent: "space-evenly", marginLeft: 10 }}>
      <Text style={{ fontSize: 19, fontWeight: "600", marginBottom: 5 }}>
        {props.food.title}
      </Text>
      <Text>{props.food.description}</Text>
      <Text style={{ marginTop: 5 }}>{props.food.price}</Text>
    </View>
  );
};

const FoodImage = (props) => {
  return (
    <View>
      <Image
        source={props.food.image}
        style={{ width: 100, height: 100, borderRadius: 8 }}
      />
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
});
