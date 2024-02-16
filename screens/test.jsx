import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  PanResponder,
  Animated,
} from "react-native";
import { BottomSheet } from "@rneui/themed";

const Test = () => {
  const leftBottomSheetRef = useRef(null);
  const rightBottomSheetRef = useRef(null);

  const leftPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dx < -50) {
        // Swipe left
        leftBottomSheetRef.current?.open();
      }
    },
  });

  const rightPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dx > 50) {
        // Swipe right
        rightBottomSheetRef.current?.open();
      }
    },
  });

  return (
    <ImageBackground
      source={require("../../assets/onboarding.png")}
      style={{ width: "100%", height: "100%" }}
      {...leftPanResponder.panHandlers}
      {...rightPanResponder.panHandlers}
    >
      <TouchableOpacity
        onPress={() => leftBottomSheetRef.current?.open()}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Open Left Bottom Sheet</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => rightBottomSheetRef.current?.open()}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Open Right Bottom Sheet</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={leftBottomSheetRef}
        containerStyle={styles.bottomSheetContainer}
      >
        <View style={styles.bottomSheetContent}>
          <Text>Left Sheet Content</Text>
        </View>
      </BottomSheet>

      <BottomSheet
        ref={rightBottomSheetRef}
        containerStyle={styles.bottomSheetContainer}
      >
        <View style={styles.bottomSheetContent}>
          <Text>Right Sheet Content</Text>
        </View>
      </BottomSheet>
    </ImageBackground>
  );
};

export default Test;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 8,
    margin: 16,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  bottomSheetContainer: {
    backgroundColor: "transparent",
  },
  bottomSheetContent: {
    padding: 16,
    backgroundColor: "white",
  },
});
