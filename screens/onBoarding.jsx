import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";
import Login from "./login";

const OnBoarding = ({ navigation }) => {
  const btnLogin = () => {
    navigation.navigate(Login);
  };
  return (
    <Swiper
      loop={false} // set to true if you want it to loop
      showsPagination={true} // hides the default pagination dots
      horizontal={true} // set to true if you want horizontal swiping
      dotStyle={styles.dotStyle} // Style for inactive dots
      activeDotStyle={styles.activeDotStyle} // Style for active dot
    >
      {/* Screen 1 */}
      <ImageBackground
        source={require("../assets/onboarding.png")}
        style={{ flex: 1 }}
      >
        <View
          style={{
            width: "100%",
            height: 600,
            marginTop: 450,
            backgroundColor: "white",
            borderTopEndRadius: 40,
            borderTopLeftRadius: 40,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Quality
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              marginTop: 30,
            }}
          >
            Sell your farm fresh products directly to consumers, cutting out the
            middleman and reducing emissions of the global supply chain.{" "}
          </Text>
          <View
            style={{
              marginTop: 120,
              backgroundColor: "#5EA25F",
              alignItems: "center",
              marginLeft: 30,
              marginRight: 30,
              borderRadius: 40,
            }}
          >
            <Text style={{ fontSize: 26, margin: 20, color: "white" }}>
              Join the movement!
            </Text>
          </View>
          <View style={{ alignSelf: "center", marginTop: 10 }}>
            <Text
              style={{ textDecorationLine: "underline", fontSize: 20 }}
              onPress={btnLogin}
            >
              Login
            </Text>
          </View>
        </View>
      </ImageBackground>

      {/* Screen 2 */}
      <ImageBackground
        source={require("../assets/onboarding1.png")}
        style={{ flex: 1 }}
      >
        <View
          style={{
            width: "100%",
            height: 600,
            marginTop: 450,
            backgroundColor: "white",
            borderTopEndRadius: 40,
            borderTopLeftRadius: 40,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Convenient
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              marginTop: 30,
              margin: 3,
            }}
          >
            Our team of delivery drivers will make sure your orders are picked
            up on time and promptly delivered to your customers.
          </Text>
          <View
            style={{
              marginTop: 120,
              backgroundColor: "#D5715B",
              alignItems: "center",
              marginLeft: 30,
              marginRight: 30,
              borderRadius: 40,
            }}
          >
            <Text style={{ fontSize: 26, margin: 20, color: "white" }}>
              Join the movement!
            </Text>
          </View>
          <View style={{ alignSelf: "center", marginTop: 10 }}>
            <Text
              style={{ textDecorationLine: "underline", fontSize: 20 }}
              onPress={btnLogin}
            >
              Login
            </Text>
          </View>
        </View>
      </ImageBackground>

      {/* Screen 3 */}
      <ImageBackground
        source={require("../assets/onboarding2.png")}
        style={{ flex: 1 }}
      >
        <View
          style={{
            width: "100%",
            height: 600,
            marginTop: 450,
            backgroundColor: "white",
            borderTopEndRadius: 40,
            borderTopLeftRadius: 40,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Local
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              marginTop: 30,
              margin: 3,
            }}
          >
            We love the earth and know you do too! Join us in reducing our local
            carbon footprint one order at a time.
          </Text>
          <View
            style={{
              marginTop: 120,
              backgroundColor: "#F8C569",
              alignItems: "center",
              marginLeft: 30,
              marginRight: 30,
              borderRadius: 40,
            }}
          >
            <Text style={{ fontSize: 26, margin: 20, color: "white" }}>
              Join the movement!
            </Text>
          </View>
          <View style={{ alignSelf: "center", marginTop: 10 }}>
            <Text
              style={{ textDecorationLine: "underline", fontSize: 20 }}
              onPress={btnLogin}
            >
              Login
            </Text>
          </View>
        </View>
      </ImageBackground>
    </Swiper>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  dotStyle: {
    bottom: 170,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black", // Inactive dot color
    margin: 3,
  },
  activeDotStyle: {
    width: 20,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black", // Active dot color
    margin: 3,
    bottom: 170,
  },
});
