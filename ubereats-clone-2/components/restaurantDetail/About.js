import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const image = require("../../assets/images/burger.jpg");
const title = "Flip & Shake";
const description = "Fast Food • Western • 4.5 (1200 reviews)";

const About = () => {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = (props) => {
  return <Image source={props.image} style={{ width: "100%", height: 240 }} />;
};

const RestaurantTitle = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.title}
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
