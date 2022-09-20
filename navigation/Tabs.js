import React, { useCallback } from "react";
import { View, Text, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import colors from "../colors";
import { Ionicons } from "@expo/vector-icons";
import Stack from "./Stack";
import styled from "styled-components/native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      initialRouteName="Movie"
      screenOptions={{
        // tabBarLabelPosition: 'beside-icon',
        tabBarStyle: { backgroundColor: isDark ? colors.dark : "white" },
        tabBarActiveTintColor: isDark ? colors.orange : colors.dark,
        tabBarInactiveTintColor: isDark ? colors.gray_0 : colors.gray_1,
        headerStyle: { backgroundColor: isDark ? colors.dark : "white" },
        headerTitleStyle: { color: isDark ? "white" : colors.dark },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600", marginTop: -6 },
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
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="film-outline" color={color} size={size} />
          ),
          // headerShown: false,
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarBadge: 5,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="tv-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
