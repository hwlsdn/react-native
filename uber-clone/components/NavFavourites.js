import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Atherton, San Mateo, California",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "Serra Mall, California",
  },
  {
    id: "789",
    icon: "barbell",
    location: "Gym",
    destination: "San Mateo, California",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <View className="bg-gray-200 h-0.5" />}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <Icon
            className="mr-4 rounded-full bg-gray-300 p-3"
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg">{location}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
