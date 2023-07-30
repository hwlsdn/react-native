import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export const localRestaurants = [
  {
    image_url: require("../assets/images/burger.jpg"),
    name: "Flip & Shake",
    categories: ["Fast Food", "Western"],
    rating: 4.5,
    reviews: 1200,
    price: "$$",
  },
  {
    image_url: require("../assets/images/indian-food.jpg"),
    name: "The Ganges",
    categories: ["Asian", "Indian"],
    rating: 4.8,
    reviews: 1400,
    price: "$$",
  },
  {
    image_url: require("../assets/images/burger.jpg"),
    name: "Flip & Shake",
    categories: ["Fast Food", "Western"],
    rating: 4.5,
    reviews: 1200,
    price: "$$",
  },
  {
    image_url: require("../assets/images/indian-food.jpg"),
    name: "The Ganges",
    categories: ["Asian", "Indian"],
    rating: 4.8,
    reviews: 1400,
    price: "$$",
  },
];

const RestaurantItems = ({ restaurantData }) => {
  return (
    <View>
      {restaurantData.map((restaurant, index) => (
        <TouchableOpacity key={index} style={{ padding: 10 }}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const RestaurantImage = ({ image }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <>
      <Image source={image} style={{ width: "100%", height: 180 }} />
      <TouchableOpacity
        onPress={() => setIsLiked(!isLiked)}
        style={{ position: "absolute", right: 20, top: 20 }}
      >
        <MaterialCommunityIcons
          name={isLiked ? "heart" : "heart-outline"}
          size={25}
          color={isLiked ? "red" : "white"}
        />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = ({ name, rating }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 min</Text>
      </View>
      <View
        style={{
          backgroundColor: "black",
          height: 40,
          width: 40,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>{rating}</Text>
      </View>
    </View>
  );
};

export default RestaurantItems;

const styles = StyleSheet.create({});
