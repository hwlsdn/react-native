import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const OrderCompleted = ({ route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
      />
      <Text style={styles.orderText}>
        Your order at{" "}
        <Text style={styles.boldText}>{route.params.restaurantName}</Text> has
        been placed.
      </Text>
      <LottieView
        style={{ height: 200, alignSelf: "center" }}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        speed={0.5}
      />
    </SafeAreaView>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  orderText: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
});
