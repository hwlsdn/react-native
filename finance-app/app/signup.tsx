import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const SignUpScreen = () => {
  const [countryCode, setCountryCode] = useState("+82");
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardVericalOffset = Platform.OS === "ios" ? 80 : 0;

  const onSignup = async () => {};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVericalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone number to receive the confirmation code.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Country code"
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Mobile number"
            keyboardType="numeric"
            placeholderTextColor={Colors.gray}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <Link href={"/login"} replace asChild>
          <TouchableOpacity>
            <Text style={{ color: Colors.primary }}>
              Already have an account?
            </Text>
          </TouchableOpacity>
        </Link>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== "" ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={phoneNumber !== "" ? onSignup : () => {}}
          disabled={phoneNumber === ""}
        >
          <Text style={defaultStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: "row",
  },
  input: {
    padding: 20,
    borderRadius: 20,
    fontSize: 20,
    marginRight: 10,
    borderColor: Colors.gray,
    borderWidth: 1,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.gray,
  },
});
