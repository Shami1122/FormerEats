import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const DoneScreen = ({ navigation }) => {
  const btnContinue = () => {
    alert("All Done Congrats");
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Vector1.png")} style={styles.image} />
      <Text style={styles.doneText}>You’re all done!</Text>
      <Text style={styles.descriptionText}>
        Hang tight! We are currently reviewing your account and will follow up
        with you in 2-3 business days. In the meantime, you can set up your
        inventory.
      </Text>

      <TouchableOpacity style={styles.continueButton} onPress={btnContinue}>
        <Text style={styles.continueButtonText}>Got it!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 20,
    marginTop: 300,
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 80,
    marginBottom: 20,
  },
  doneText: {
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 18,
    color: "grey",
    textAlign: "center",
  },
  continueButton: {
    width: 400,
    height: 52,
    backgroundColor: "#D5715B",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 270,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default DoneScreen;
