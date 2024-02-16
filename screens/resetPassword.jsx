import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const ResetPassword = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = () => {
    // Implement logic to handle password reset
    console.log("New Password:", newPassword);
    console.log("Confirm New Password:", confirmNewPassword);
    // Add logic for password reset submission
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
      <View style={{ marginTop: 30 }}>
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
