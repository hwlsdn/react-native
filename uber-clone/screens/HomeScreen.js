import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
  return (
    <View className="bg-white h-full">
      <SafeAreaView>
        <View className="ml-5">
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            source={{ uri: "https://links.papareact.com/gzs" }}
          />
        </View>
        <GooglePlacesAutocomplete
          styles={{
            container: {
                flex: 0,
                marginBottom: 10,
                marginLeft: 10,
            },
            textInput: {
                fontSize: 18,
            },
          }}
          query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
