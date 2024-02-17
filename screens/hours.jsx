import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const Hours = ({ navigation }) => {
  const arrowBack = () => {
    navigation.goBack();
  };
  const btnContinue = () => {
    navigation.navigate("DoneScreen");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.farmerEatsText}>FarmerEats</Text>
      <Text style={styles.signupText}>Signup 4 of 4</Text>
      <Text style={styles.hoursText}>Business Hours</Text>
      <Text style={styles.descriptionText}>
        Choose the hours your farm is open for pickups. This will allow
        customers to order deliveries.
      </Text>

      <View style={styles.daysContainer}>
        <View style={[styles.dayBox, styles.filledDay]}>
          <Text style={styles.dayText}>M</Text>
        </View>
        <View style={[styles.dayBox, styles.filledDay]}>
          <Text style={styles.dayText}>T</Text>
        </View>
        <View style={[styles.dayBox, styles.coloredDay]}>
          <Text style={{ color: "white" }}>W</Text>
        </View>
        <View style={styles.dayBox}>
          <Text style={{ color: "grey" }}>Th</Text>
        </View>
        <View style={styles.dayBox}>
          <Text style={{ color: "grey" }}>F</Text>
        </View>
        <View style={styles.dayBox}>
          <Text style={{ color: "grey" }}>S</Text>
        </View>
        <View style={styles.dayBox}>
          <Text style={{ color: "grey" }}>Su</Text>
        </View>
      </View>

      <View style={styles.timeSlotsContainer}>
        <View style={styles.timeSlotBox}>
          <Text style={styles.greyText}>8:00am - 10:00am</Text>
        </View>
        <View style={styles.timeSlotBox}>
          <Text style={styles.greyText}>10:00am - 1:00pm</Text>
        </View>
      </View>

      <View style={styles.timeSlotsContainer}>
        <View style={[styles.timeSlotBox, styles.coloredTimeSlot]}>
          <Text style={styles.whiteText}>1:00pm - 4:00pm</Text>
        </View>
        <View style={[styles.timeSlotBox, styles.coloredTimeSlot]}>
          <Text style={styles.whiteText}>4:00pm - 7:00pm</Text>
        </View>
      </View>

      <View style={styles.singleTimeSlotBox}>
        <Text style={styles.greyText}>7:00pm - 10:00pm</Text>
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
          <Text style={styles.continueButtonText}>Submit</Text>
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
  hoursText: {
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 18,
    color: "grey",
    marginTop: 20,
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  dayBox: {
    width: 37,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",

    marginVertical: 20,
  },
  filledDay: {
    backgroundColor: "lightgrey",
  },
  coloredDay: {
    backgroundColor: "#D5715B",
  },
  dayText: {
    color: "black",
  },
  whiteText: {
    color: "black",
  },
  greyText: {
    color: "black",
  },
  timeSlotsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  timeSlotBox: {
    width: 195,
    height: 48,
    borderRadius: 8,

    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8C569",
  },
  coloredTimeSlot: {
    backgroundColor: "lightgrey",
  },
  singleTimeSlotBox: {
    width: 195,
    height: 48,
    borderRadius: 8,

    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "lightgrey",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 300,
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
    marginLeft: 115,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Hours;
