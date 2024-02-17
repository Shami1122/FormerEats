import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView, // Added import for Alert
} from "react-native";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const FormInfo = ({ navigation }) => {
  const [selectedState, setSelectedState] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [infoName, setInfoName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const arrowBack = () => {
    navigation.goBack();
  };

  const btnContinue = () => {
    // Add your logic here
    if (
      !businessName ||
      !infoName ||
      !streetAddress ||
      !city ||
      !selectedState ||
      !zipCode
    ) {
      Alert.alert("Error!", "All fields are required.");
    } else {
      Alert.alert("Succesfully", "Succesfully Registerd");
      navigation.navigate("VerificationScreen");
    }
  };

  const handleStateChange = (itemValue) => {
    setSelectedState(itemValue);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.farmerEatsText}>FarmerEats</Text>
        <Text style={styles.signupText}>Signup 2 of 4</Text>
        <Text style={styles.farmInfoText}>Farm Info</Text>

        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/Vector.png")}
            style={styles.socialIcon2}
          />
          <TextInput
            style={styles.input}
            placeholder="Business Name"
            placeholderTextColor="grey"
            value={businessName}
            onChangeText={(text) => setBusinessName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="smile-o" size={20} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Information Name"
            placeholderTextColor="grey"
            value={infoName}
            onChangeText={(text) => setInfoName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="home" size={20} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Street Address"
            placeholderTextColor="grey"
            value={streetAddress}
            onChangeText={(text) => setStreetAddress(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="location-outline" size={22} color="black" />
          <TextInput
            style={styles.input}
            placeholder="City"
            placeholderTextColor="grey"
            value={city}
            onChangeText={(text) => setCity(text)}
          />
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.dropdownContainer}>
            <Picker
              style={styles.picker}
              selectedValue={selectedState}
              onValueChange={handleStateChange}
            >
              <Picker.Item label="State" value="" />
              <Picker.Item label="Punjab" value="Punjab" />
              <Picker.Item label="Sindh" value="Sindh" />
              <Picker.Item label="KPK" value="KPK" />
              <Picker.Item label="Balochistan" value="Balochistan" />
            </Picker>
          </View>
          <View style={styles.drawerContainer}>
            <TextInput
              style={styles.drawerInput}
              placeholder="Enter Zipcode"
              placeholderTextColor="grey"
              value={zipCode}
              onChangeText={(text) => setZipCode(text)}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.backButton}>
            <AntDesign
              name="arrowleft"
              size={30}
              color="black"
              onPress={arrowBack}
            />
          </View>
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
    marginTop: 40,
  },
  farmInfoText: {
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "lightgrey",
    borderRadius: 8,
    paddingLeft: 15,
    marginTop: 15,
  },
  input: {
    width: "80%",
    height: 48,
    paddingLeft: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  dropdownContainer: {
    backgroundColor: "lightgrey",
    width: 140,
    height: 48,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  picker: {
    height: 48,
    width: "100%",
  },
  drawerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  drawerText: {
    fontSize: 16,
    color: "grey",
    marginRight: 10,
    borderRadius: 8,
    marginLeft: 7,
  },
  drawerInput: {
    width: 250,
    height: 48,
    paddingLeft: 10,
    backgroundColor: "lightgrey",
    borderRadius: 8,
  },
  continueButton: {
    width: 250,
    height: 52,
    backgroundColor: "#D5715B",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 128,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 180,
  },
  backButton: {
    marginTop: 10,
  },
  socialIcon2: {
    width: 18,
    height: 18,

    alignSelf: "center",
  },
});

export default FormInfo;
