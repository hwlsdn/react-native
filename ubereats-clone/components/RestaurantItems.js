import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const localRestaurants = [
  {
    id: 1,
    image: require("../assets/images/burger.jpg"),
    title: "Flip & Shake",
    time: "30-45 min",
    rating: 4.5,
  },
  {
    id: 2,
    image: require("../assets/images/indian-food.jpg"),
    title: "The Ganges",
    time: "40-65 min",
    rating: 4.8,
  },
  {
    id: 3,
    image: require("../assets/images/burger.jpg"),
    title: "Flip & Shake",
    time: "30-45 min",
    rating: 4.5,
  },
  {
    id: 4,
    image: require("../assets/images/indian-food.jpg"),
    title: "The Ganges",
    time: "40-65 min",
    rating: 4.8,
  },
];

const RestaurantImage = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View>
      <Image style={{ width: "100%", height: 200 }} source={item.image} />
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
        <Text className="font-medium text-base">{item.title}</Text>
        <Text className="font-light text-sm text-gray-600">{item.time}</Text>
      </View>
      <View className="m-1 mr-5 mb-3 bg-black rounded-full p-3 shadow-lg">
        <Text className="text-white font-semibold">{item.rating}</Text>
      </View>
    </View>
  );
};

const RestaurantItems = ({restaurantData}) => {
  return (
    <View className="mb-36">
      {restaurantData.map((item) => (
        <View
          key={item.id}
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
