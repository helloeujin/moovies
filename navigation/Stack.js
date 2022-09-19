import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../colors";

const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Two")}>
    <Text>go to Two</Text>
  </TouchableOpacity>
);
const ScreenTwo = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Three")}>
    <Text>go to Three</Text>
  </TouchableOpacity>
);
const ScreenThree = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Search" })}>
    <Text>go to Search</Text>
  </TouchableOpacity>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator
    screenOptions={{
      //   presentation: "modal",
      headerBackTitleVisible: false,
      headerShown: true,
      headerTintColor: colors.orange,
      fullScreenGestureEnabled: true,
    }}
  >
    <NativeStack.Screen name="One" component={ScreenOne} />
    <NativeStack.Screen name="Two" component={ScreenTwo} />
    <NativeStack.Screen
      name="Three"
      component={ScreenThree}
      options={{ presentation: "modal" }}
    />
  </NativeStack.Navigator>
);

export default Stack;
