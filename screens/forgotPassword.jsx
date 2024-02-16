import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Login from "./login";
import Otp from "./otp";

const ForgotPassword = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const btnSendCode = () => {
    navigation.navigate(Otp);
  };

  const handlePhoneNumberChange = (input) => {
    // Allow only numeric input
    const numericInput = input.replace(/[^0-9]/g, "");
    setPhoneNumber(numericInput);
  };

  const isPhoneNumberValid = () => {
    // Check if the phone number is valid (e.g., required length)
    return phoneNumber.length === 12; // Change the condition based on your requirement
  };

  const btnLogin = () => {
    navigation.navigate(Login);
  };

  return (
    <View style={{ marginLeft: 10, borderRadius: 30 }}>
      <Text style={{ marginTop: 46, fontSize: 16, fontWeight: "bold" }}>
        FarmerEats
      </Text>
      <Text style={{ marginTop: 149, fontSize: 32, fontWeight: "bold" }}>
        Forgot Password?
      </Text>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Text style={{ fontSize: 16, color: "grey" }}>
          Remember your password?
        </Text>
        <Text style={{ marginLeft: 10, color: "#D5715B" }} onPress={btnLogin}>
          Login
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "lightgrey",
          marginRight: 10,
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 90,
        }}
      >
        <Feather
          name="phone"
          size={20}
          color="black"
          style={{ marginRight: 10, marginLeft: 10 }}
        />
        <TextInput
          style={{ flex: 1, height: 50 }}
          placeholder="Phone Number"
          keyboardType="numeric" // Set the keyboard type to numeric
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
      </View>
      {phoneNumber.length > 0 && !isPhoneNumberValid() && (
        <Text style={styles.errorText}>
          Please enter a valid 12-digit phone number with country code
        </Text>
      )}
      <TouchableOpacity
        style={styles.loginButton}
        disabled={!isPhoneNumberValid()}
      >
        <Text style={styles.loginButtonText} onPress={btnSendCode}>
          Send Code
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: "#D5715B",
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 50,
    width: 400,
    marginRight: 10,
    height: 52,
    alignSelf: "center",
    opacity: 1, // Change the opacity based on validation logic
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
});

export default ForgotPassword;
