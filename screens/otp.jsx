import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const VerifyOtpPage = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Updated to include 6 boxes
  const otpInputs = Array(6) // Updated to create 6 refs
    .fill(null)
    .map(() => useRef(null));

  const handleResendCode = () => {
    // Implement logic to resend the code
    console.log("Resending code...");
  };

  const handleVerifyOtp = () => {
    const OTP = "895642";

    if (otp.every((value) => value === "")) {
      alert(
        JSON.stringify({
          success: false,
          message: "OTP cannot be empty.",
        })
      );
    } else if (otp.join("") !== OTP) {
      alert(
        JSON.stringify({
          success: false,
          message: "Invalid OTP.",
        })
      );
    } else {
      // Rest of your code for handling a valid OTP
      const token = "895642";
      alert(
        JSON.stringify({
          success: true,
          message: "OTP verified successful.",
          token: token,
        })
      );
      navigation.navigate("ResetPassword");
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === "Backspace" && index > 0 && otp[index].length === 0) {
      otpInputs[index - 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 46, fontSize: 16, fontWeight: "bold" }}>
        FarmerEats
      </Text>
      <Text style={styles.verifyOtpText}>Verify OTP</Text>

      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Remember your password? </Text>
        <Text
          style={[styles.linkText, { color: "#D5715B" }]}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </View>

      <View style={styles.otpContainer}>
        {otpInputs.map((inputRef, index) => (
          <TextInput
            key={index}
            ref={inputRef}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={otp[index]}
            onChangeText={(text) => {
              setOtp((prevOtp) => {
                const newOtp = [...prevOtp];
                newOtp[index] = text;
                return newOtp;
              });

              if (text !== "" && index < otpInputs.length - 1) {
                otpInputs[index + 1].current.focus();
              }
            }}
            onKeyPress={({ nativeEvent: { key } }) =>
              handleKeyPress(index, key)
            }
            returnKeyType={index === otpInputs.length - 1 ? "done" : "next"}
            blurOnSubmit={index === otpInputs.length - 1}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOtp}>
        <Text style={styles.verifyButtonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.resendCodeText} onPress={handleResendCode}>
        Resend Code
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    borderRadius: 30,
  },
  verifyOtpText: {
    fontSize: 39,
    fontWeight: "bold",
    marginTop: 149,
    marginBottom: 20,
  },
  linkContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  linkText: {
    fontSize: 14,
    color: "grey",
    marginTop: 15,
  },
  otpContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 50,
  },
  otpInput: {
    width: 58,
    height: 58,
    borderWidth: 0.5,
    borderColor: "#A0A0A0",
    borderRadius: 8,
    marginRight: 5,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "lightgrey",
  },
  verifyButton: {
    width: 365,
    height: 52,
    backgroundColor: "#D5715B",
    borderRadius: 117,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  verifyButtonText: {
    color: "white",
    fontSize: 18,
  },
  resendCodeText: {
    fontSize: 14,
    textDecorationLine: "underline",
    alignSelf: "center",
    fontWeight: "bold",
    marginRight: 13,
  },
});

export default VerifyOtpPage;
