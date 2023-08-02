import React from "react";
import RootNavigation from "./RootNavigation";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

export default function App() {
  return <RootNavigation />;
}
