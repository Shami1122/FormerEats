import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoarding from "../screens/onBoarding";
import Login from "../screens/login";
import ForgotPassword from "../screens/forgotPassword";
import VerifyOtpPage from "../screens/otp";
import ResetPassword from "../screens/resetPassword";
import Test from "../screens/test";
import RegistrationScreen from "../screens/registrationScreen";
import FormInfo from "../screens/formInfo";
import VerificationScreen from "../screens/verificationScreen";
import Hours from "../screens/hours";
import DoneScreen from "../screens/doneScreen";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Test"
          component={Test}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyOtpPage"
          component={VerifyOtpPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FormInfo"
          component={FormInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Hours"
          component={Hours}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DoneScreen"
          component={DoneScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { MyStack };
