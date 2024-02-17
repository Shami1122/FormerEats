// import * as data from "../application.json";
// const email = data.name;
// console.log(email);

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";

const Test = ({ navigation }) => {
  const customData = require("../application.json");

  const btnLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={{ marginTop: 200 }}>
      <Text>Test</Text>
      <Button title={"Login"} onPress={btnLogin} />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
