import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { Colors } from "../constants/colors";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={Colors.primary50} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi Heaven"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          short_description="Sushi, Japanese, Asian"
          dishes={["sushi", "fish"]}
          long={20}
          lat={15}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi Heaven"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          short_description="Sushi, Japanese, Asian"
          dishes={["sushi", "fish"]}
          long={20}
          lat={15}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi Heaven"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          short_description="Sushi, Japanese, Asian"
          dishes={["sushi", "fish"]}
          long={20}
          lat={15}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
