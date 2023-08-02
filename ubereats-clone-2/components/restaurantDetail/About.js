import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

// const yelpRestaurantInfo = {
//   name: "Farmhouse Kitchen Thai Cuisine",
//   image: "https://i.imgur.com/2nCt3Sbl.jpg",
//   price: "$$",
//   reviews: "1500",
//   rating: 4.5,
//   categories: [{ title: "Thai" }, { title: "Comfort Food" }],
// };

// const image = require("../../assets/images/burger.jpg");
// const title = "Flip & Shake";
// const description = "Fast Food • Western • 4.5 (1200 reviews)";

// const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const About = ({ route }) => {
  const { name, image, price, reviews, rating, categories } = route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} • ${rating.toFixed(1)} (${reviews} reviews)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = (props) => {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 240 }}
    />
  );
};

const RestaurantName = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.name}
    </Text>
  );
};

const RestaurantDescription = (props) => {
  return (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
        color: "grey",
      }}
    >
      {props.description}
    </Text>
  );
};

export default About;

const styles = StyleSheet.create({});
