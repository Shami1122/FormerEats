import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import * as data from "../application.json";

const RegistrationScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");

  const isValidEmail = (email) => {
    // Basic email validation, replace with your own logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const btnContinue = () => {
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !password ||
      !reenteredPassword
    ) {
      Alert.alert("Error", "All fields are required.");
    } else if (!isValidEmail(email)) {
      Alert.alert("Error", "Invalid email address.");
    } else if (password !== reenteredPassword) {
      Alert.alert("Error", "Passwords do not match.");
    } else if (email === data.email) {
      Alert.alert("Error", "Email already exists.");
    } else {
      // Implement logic to send registration request
      // For this example, showing a success message
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
      alert(
        JSON.stringify({
          success: true,
          message: "Registered.",
          token: token,
        })
      );
      navigation.navigate("FormInfo");
    }
  };

  const btnLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.farmerEatsText}>FarmerEats</Text>
        <Text style={styles.signupText}>Signup 1 of 4</Text>
        <Text style={styles.welcomeText}>Welcome!</Text>

        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={require("../assets/google-icon.png")}
              style={styles.socialIcon2}
            />

            {/* <FontAwesome name="google" size={24} color="black" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={require("../assets/apple-icon.png")}
              style={styles.socialIcon2}
            />

            {/* <FontAwesome name="apple" size={24} color="black" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={require("../assets/facebook-icon.png")}
              style={styles.socialIcon2}
            />
            {/* <FontAwesome name="facebook" size={24} color="black" /> */}
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>or signup with</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <FontAwesome name="user" size={20} color="grey" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="grey"
            onChangeText={(text) => setFullName(text)}
            value={fullName}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <Entypo name="email" size={20} color="grey" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="grey"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <FontAwesome name="phone" size={20} color="grey" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="grey"
            onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <FontAwesome name="lock" size={20} color="grey" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="grey"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <FontAwesome name="lock" size={20} color="grey" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Re-Enter Password"
            secureTextEntry
            placeholderTextColor="grey"
            onChangeText={(text) => setReenteredPassword(text)}
            value={reenteredPassword}
          />
        </View>

        <View style={styles.loginButtonContainer}>
          <Text style={styles.loginText} onPress={btnLogin}>
            Login
          </Text>
          <TouchableOpacity style={styles.continueButton} onPress={btnContinue}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 40,
  },
  farmerEatsText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  signupText: {
    fontSize: 14,
    color: "grey",
    marginTop: 50,
  },
  welcomeText: {
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  socialIcon: {
    width: 96,
    height: 52,
    borderWidth: 0.2,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  orText: {
    fontSize: 12,
    color: "grey",
    marginTop: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "lightgrey",
    borderRadius: 30,
    marginTop: 15,
  },
  inputIcon: {
    paddingLeft: 15,
  },
  input: {
    width: 330,
    height: 48,
    paddingLeft: 10,
  },
  loginButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
  },
  loginText: {
    fontSize: 16,
    color: "grey",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  continueButton: {
    width: 226,
    height: 52,
    backgroundColor: "#D5715B",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
  },
  socialIcon2: {
    width: 30,
    height: 30,

    alignSelf: "center",
  },
});

export default RegistrationScreen;
