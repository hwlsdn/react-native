import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "react-native-vector-icons";
import { GOOGLE_API_KEY } from "@env";

const SearchBar = ({ cityHandler }) => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        query={{ key: GOOGLE_API_KEY, language: "en" }}
        onPress={(data, details = null) => {
          const city = data.description.split(",")[0];
          cityHandler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: styles.textInput,
          textInputContainer: styles.textInputContainer,
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 5 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              alignItems: "center",
              padding: 9,
              borderRadius: 30,
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 10 }}
            />
            <Text>Search</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
    marginHorizontal: 10,
  },
  textInput: {
    backgroundColor: "#eee",
    borderRadius: 20,
    fontWeight: "700",
    marginTop: 7,
  },
  textInputContainer: {
    backgroundColor: "#eee",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
