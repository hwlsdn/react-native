import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";

const OrderCompleted = ({ route, navigation }) => {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(false);
    }, 3500);
    return () => clearTimeout(timeout);
  }, []);

  if (mounted) {
    return <MountedScreen restaurantName={route.params.restaurantName} />;
  } else {
    navigation.navigate("Home");
  }
};

const MountedScreen = ({ restaurantName }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
      />
      <Text style={styles.orderText}>
        Your order at <Text style={styles.boldText}>{restaurantName}</Text> has
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
