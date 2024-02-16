import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather, FontAwesome, AntDesign } from "@expo/vector-icons"; // Import the necessary icon libraries
import ForgotPassword from "./forgotPassword";

const Login = ({ navigation }) => {
  const btnForgotPassword = () => {
    navigation.navigate(ForgotPassword);
  };
  return (
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
          <Text style={styles.createAccountText}> Create account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Feather name="at-sign" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#A0A0A0"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Feather name="lock" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#A0A0A0"
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.forgotText} onPress={btnForgotPassword}>
              Forgot?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton}>
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
