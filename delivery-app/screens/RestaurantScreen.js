import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../util/sanity";
import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
} from "react-native-heroicons/solid";
import { Colors } from "../constants/colors";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      dishes,
      short_description,
      genre,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  function pressBackButtonHandler(){
    navigation.goBack();
  }

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity onPress={pressBackButtonHandler} className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
          <ArrowLeftIcon size={20} color={Colors.primary50} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
