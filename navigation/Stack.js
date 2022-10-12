import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../screens/Detail";
import { useColorScheme } from "react-native";
import colors from "../colors";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: isDark ? colors.dark : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : colors.dark,
        },
      }}
    >
      <NativeStack.Screen
        name="Detail"
        component={Detail}
        options={{ presentation: "modal" }}
      />
    </NativeStack.Navigator>
  );
};

export default Stack;
