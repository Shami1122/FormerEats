import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as data from "../application.json";

const ResetPassword = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const token = "895642";
  const password = data.password;

  const handleSubmit = () => {
    if (newPassword !== confirmNewPassword) {
      Alert.alert("Error", "Password and confirm password do not match.");
    } else if (newPassword.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long.");
    } else if (newPassword === password) {
      Alert.alert(
        "Error",
        "New password cannot be the same as the old password."
      );
    } else if (tokenExpired()) {
      Alert.alert(
        "Error",
        "Your password reset token has expired. Please request a new one."
      );
    } else {
      // Implement the logic to handle a successful password reset
      console.log("New Password:", newPassword);
      console.log("Confirm New Password:", confirmNewPassword);
      // Add logic for password reset submission

      alert(
        JSON.stringify({
          success: "true",
          message: "Your password has been successfully changed.",
          is_verified: "true",
        })
      );
      navigation.navigate("Login");
    }
  };

  const tokenExpired = () => {
    // Implement logic to check if the reset token is expired
    // Return true if expired, false otherwise
    return false; // Replace with actual implementation
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 46, fontSize: 16, fontWeight: "bold" }}>
        FarmerEats
      </Text>
      <Text style={styles.resetPasswordText}>Reset Password</Text>

      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Remember your password? </Text>
        <Text
          style={[styles.linkText, { color: "#D5715B" }]}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </View>

      <View style={styles.passwordInputContainer}>
        <View style={styles.lockIconContainer}>
          <Feather
            name="lock"
            size={24}
            color="black"
            style={styles.lockIcon}
          />
        </View>
        <TextInput
          style={styles.passwordInput}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
      </View>

      <View style={styles.passwordInputContainer}>
        <View style={styles.lockIconContainer}>
          <Feather
            name="lock"
            size={24}
            color="black"
            style={styles.lockIcon}
          />
        </View>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm New Password"
          secureTextEntry
          value={confirmNewPassword}
          onChangeText={(text) => setConfirmNewPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    borderRadius: 30,
  },
  resetPasswordText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 150,
  },
  linkContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 20,
  },
  linkText: {
    fontSize: 16,
    color: "grey",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "lightgrey",
    borderRadius: 8,
    marginVertical: 10,
  },
  lockIconContainer: {
    position: "absolute",
    left: 10,
  },
  lockIcon: {
    marginRight: 10,
  },
  passwordInput: {
    width: "100%",
    height: 50,
    borderColor: "#A0A0A0",
    borderRadius: 8,
    paddingLeft: 45, // Adjust the padding to accommodate the icon
  },
  submitButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#D5715B",
    borderRadius: 117,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default ResetPassword;
