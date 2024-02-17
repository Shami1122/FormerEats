import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const VerificationScreen = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);
  const [imageFileName, setImageFileName] = useState("");
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [isTextInputVisible, setTextInputVisible] = useState(false);

  requestPermission();

  const arrowBack = () => {
    navigation.goBack();
  };
  const btnContinue = () => {
    navigation.navigate("Hours");
  };
  const handleAttachProof = async () => {
    try {
      if (!status == "granted") {
        Alert.alert("Permission not granted!");
        return;
      }

      const selectedImage = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (!selectedImage.canceled) {
        const firstAsset = selectedImage.assets[0];
        setImageUri(firstAsset.uri);
        setImageFileName(firstAsset.fileName);
        setTextInputVisible(true);
        console.log(firstAsset.uri);
        console.log(firstAsset.fileName);
      }
    } catch (error) {
      console.error("Error picking Document", error);
    }
  };

  const handleCancelFile = () => {
    setImageUri(null);
    setImageFileName("");
    setTextInputVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.farmerEatsText}>FarmerEats</Text>
      <Text style={styles.signupText}>Signup 3 of 4</Text>
      <Text style={styles.verificationText}>Verification</Text>
      <Text style={styles.descriptionText}>
        Attached proof of Department of Agriculture registrations i.e. Florida
        Fresh, USDA Approved, USDA Organic
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 30,
        }}
      >
        <Text style={{ marginTop: 30, marginRight: 80, fontSize: 19 }}>
          Attach proof of registration
        </Text>
        <TouchableOpacity
          style={styles.cameraContainer}
          onPress={handleAttachProof}
        >
          <FontAwesome name="camera" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.attachContainer}>
        <Text style={styles.attachedText}>{imageUri ? "" : ""}</Text>

        {isTextInputVisible && (
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.attachedTextInput}
              value={imageFileName}
              editable={false}
            />
            <TouchableOpacity onPress={handleCancelFile}>
              <FontAwesome
                name="times"
                size={20}
                color="black"
                style={{ marginRight: 5 }}
              />
            </TouchableOpacity>
          </View>
        )}
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
    marginTop: 10,
  },
  verificationText: {
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30,
  },
  descriptionText: {
    fontSize: 20, // Adjusted font size
    color: "black", // Default color
  },
  attachContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-around",
  },
  attachedText: {
    fontSize: 14,
    color: "black",
    marginRight: 10,
  },
  cameraContainer: {
    width: 53,
    height: 53,
    borderRadius: 53 / 2,
    backgroundColor: "#D5715B",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  attachContainer: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-around",
    alignItems: "center",
  },
  attachedTextInput: {
    fontSize: 14,
    color: "black",
    marginLeft: 20,

    borderRadius: 8,
    padding: 5,
    width: 350,
    height: 48,
    textDecorationLine: "underline",
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderRadius: 8,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 400,
  },
  backButton: {
    marginTop: 10,
  },
  continueButton: {
    width: 250,
    height: 52,
    backgroundColor: "#D5715B",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 125,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default VerificationScreen;
