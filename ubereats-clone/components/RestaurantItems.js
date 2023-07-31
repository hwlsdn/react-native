import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// export const localRestaurants = [
//   {
//     image_url: require("../assets/images/burger.jpg"),
//     name: "Flip & Shake",
//     categories: ["Fast Food", "Western"],
//     rating: 4.5,
//     reviews: 1200,
//     price: "$$",
//   },
//   {
//     image_url: require("../assets/images/indian-food.jpg"),
//     name: "The Ganges",
//     categories: ["Asian", "Indian"],
//     rating: 4.8,
//     reviews: 1400,
//     price: "$$",
//   },
//   {
//     image_url: require("../assets/images/burger.jpg"),
//     name: "Flip & Shake",
//     categories: ["Fast Food", "Western"],
//     rating: 4.5,
//     reviews: 1200,
//     price: "$$",
//   },
//   {
//     image_url: require("../assets/images/indian-food.jpg"),
//     name: "The Ganges",
//     categories: ["Asian", "Indian"],
//     rating: 4.8,
//     reviews: 1400,
//     price: "$$",
//   },
// ];

const RestaurantImage = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View>
      <Image
        source={{ uri: item.image_url }}
        style={{ width: "100%", height: 200 }}
      />
      <TouchableOpacity
        onPress={() => setIsLiked(!isLiked)}
        style={{ position: "absolute", right: 20, top: 20 }}
      >
        {isLiked ? (
          <MaterialCommunityIcons name="heart" size={25} color="red" />
        ) : (
          <MaterialCommunityIcons
            name="heart-outline"
            size={25}
            color="white"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const RestaurantInfo = ({ item }) => {
  return (
    <View className="flex-row justify-between items-center mt-2">
      <View className="m-1 ml-3">
        <Text className="font-medium text-base">{item.name}</Text>
        <Text className="font-light text-sm text-gray-600">
          {item.review_count} reviews
        </Text>
      </View>
      <View className="m-1 mr-5 mb-3 bg-black rounded-full p-3 shadow-lg">
        <Text className="text-white font-semibold">
          {item.rating.toFixed(1)}
        </Text>
      </View>
    </View>
  );
};

const RestaurantItems = ({ restaurantData }) => {
  return (
    <View>
      {restaurantData.map((item, index) => (
        <View
          key={index}
          className="mt-1 mb-1 p-2 pt-2 border-b border-gray-200"
        >
          <RestaurantImage item={item} />
          <TouchableOpacity>
            <RestaurantInfo item={item} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default RestaurantItems;
