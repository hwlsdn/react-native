import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <View className="items-center">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            className="p-2 pl-6 pb-8 pt-4 m-3 bg-gray-200 w-40"
          >
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
              <Icon
                className="p-2 bg-black rounded-full w-10 mt-4"
                name="arrowright"
                color="white"
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
