import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = () => {
  return (
    <View className="mt-4 flex-row mx-2">
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={styles.searchBar}
        renderLeftButton={() => (
          <View>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View>
            <TouchableOpacity style={styles.clock}>
              <AntDesign
                style={{ marginRight: 6 }}
                name="clockcircle"
                size={11}
              />
              <Text>Search</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
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
  },
  clock: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 9,
    marginRight: 8,
    borderRadius: 30,
    alignItems: "center",
  },
});
