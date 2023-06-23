import { SafeAreaView } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <HeaderTabs />
      <SearchBar />
    </SafeAreaView>
  );
};

export default HomeScreen;
