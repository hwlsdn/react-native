import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

export default Home;
