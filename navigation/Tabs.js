import React, { useCallback } from "react";
import { View, Text, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import colors from "../colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      initialRouteName="Movie"
      screenOptions={{
        // tabBarLabelStyle: { backgroundColor: 'red',},
        // tabBarLabelPosition: 'beside-icon',
        tabBarStyle: { backgroundColor: isDark ? colors.dark : "white" },
        tabBarActiveTintColor: isDark ? colors.orange : colors.dark,
        tabBarInactiveTintColor: isDark ? colors.gray_0 : colors.gray_1,
        headerStyle: { backgroundColor: isDark ? colors.dark : "white" },
        headerTitleStyle: { color: isDark ? "white" : colors.dark },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          headerRight: () => (
            <View>
              <Text>Hello</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Tv" component={Tv} options={{ tabBarBadge: 5 }} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default Tabs;
