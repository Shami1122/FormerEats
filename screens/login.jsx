import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Feather, FontAwesome, AntDesign } from "@expo/vector-icons"; // Import the necessary icon libraries
import ForgotPassword from "./forgotPassword";
import * as data from "../application.json";

const Login = ({ navigation }) => {
  const [enteremail, setenterEmail] = useState("");
  const [enterpassword, setenterPassword] = useState("");

  const btnCreateAccount = () => {
    navigation.navigate("RegistrationScreen");
  };

  const btnLogin = () => {
    const Email = data.email;
    const Password = data.password;

    if (!enteremail) {
      alert("Email cannot be empty.");
    } else if (!enterpassword) {
      alert("Password cannot be empty.");
    } else if (enteremail !== data.email || enterpassword !== data.password) {
      alert("Invalid email or password.");
    } else {
      // Assuming you have a server-side authentication process
      // Simulating a server error for demonstration purposes
      const simulateServerError = Math.random() < 0.2; // 20% chance of a server error
      if (simulateServerError) {
        alert("Server error while logging in.");
      } else {
        // Simulating the case where the login is successful
        const simulateAccountExistence = Math.random() < 0.8; // 80% chance of account existence
        if (simulateAccountExistence) {
          const token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
          alert(
            JSON.stringify({
              success: true,
              message: "Login successful.",
              token: token,
            })
          );
        } else {
          alert("Account does not exist.");
        }
      }
    }
  };

  const btnForgotPassword = () => {
    navigation.navigate(ForgotPassword);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={{
            width: 88,
            height: 23,
            marginTop: 45,

            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          FarmerEats
        </Text>
        <Text style={styles.welcomeText}>Welcome back!</Text>

        <View style={styles.createAccountContainer}>
          <Text style={styles.newHereText}>New here?</Text>
          <TouchableOpacity>
            <Text style={styles.createAccountText} onPress={btnCreateAccount}>
              {" "}
              Create account
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Feather
              name="at-sign"
              size={24}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#A0A0A0"
              onChangeText={(text) => setenterEmail(text)}
              value={enteremail}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Feather name="lock" size={24} color="black" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#A0A0A0"
              secureTextEntry
              onChangeText={(text) => setenterPassword(text)}
              value={enterpassword}
            />
            <TouchableOpacity>
              <Text style={styles.forgotText} onPress={btnForgotPassword}>
                Forgot?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={btnLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or login with</Text>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity>
            <View
              style={{
                height: 52,
                width: 96,
                borderWidth: 0.1,
                borderRadius: 5,
              }}
            >
              <Image
                source={require("../assets/google-icon.png")}
                style={styles.socialIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 52,
                width: 96,
                borderWidth: 0.1,
                borderRadius: 5,
              }}
            >
              <Image
                source={require("../assets/apple-icon.png")}
                style={styles.socialIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 52,
                width: 96,
                borderWidth: 0.1,
                borderRadius: 5,
              }}
            >
              <Image
                source={require("../assets/facebook-icon.png")}
                style={styles.socialIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  welcomeText: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: "bold",

    marginTop: 149,
  },
  createAccountContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  newHereText: {
    fontSize: 14,
    marginRight: 5,
    color: "grey",
  },
  createAccountText: {
    fontSize: 14,
    color: "#D5715B",
  },
  inputContainer: {
    width: "100%",
    marginTop: 60,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 20,
    width: "100%",
    height: 48,
    borderRadius: 8,
    backgroundColor: "lightgrey",
    marginTop: 10,
  },
  icon: {
    marginRight: 5,
    marginLeft: 5,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: "black",
  },
  forgotText: {
    fontSize: 14,
    color: "#D5715B",
    marginLeft: "auto",
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: "#D5715B",
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
    width: 330,
    height: 52,
    alignSelf: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
  },
  orText: {
    fontSize: 10,
    marginTop: 30,
    marginBottom: 10,
    alignSelf: "center",
    color: "grey",
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  socialIcon: {
    width: 30,
    height: 30,

    alignSelf: "center",
    marginTop: 9,
  },
});

export default Login;
