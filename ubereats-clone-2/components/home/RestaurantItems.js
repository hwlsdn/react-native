import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";

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

const RestaurantItems = ({ navigation, restaurantData }) => {
  return (
    <View>
      {restaurantData.map((item, index) => (
        <View key={index} style={{ padding: 10 }}>
          <RestaurantImage item={item} />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                name: item.name,
                image: item.image_url,
                price: item.price,
                reviews: item.review_count,
                rating: item.rating,
                categories: item.categories,
              })
            }
          >
            <RestaurantInfo item={item} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

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
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>
          {item.review_count} reviews
        </Text>
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
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {item.rating.toFixed(1)}
        </Text>
      </View>
    </View>
  );
};

export default RestaurantItems;

const styles = StyleSheet.create({});
