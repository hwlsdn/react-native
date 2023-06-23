import { SafeAreaView, View } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <HeaderTabs />
        <SearchBar />
      </View>

      <Categories />
    </SafeAreaView>
  );
};

export default HomeScreen;
