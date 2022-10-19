import React, { useCallback } from "react";
import { View, Text, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
// import colors from "../colors";
import { Ionicons } from "@expo/vector-icons";
import Stack from "./Stack";
import styled from "styled-components/native";
import { BLACK_COLOR, DARK_GREY, LIGHT_GREY, YELLOW_COLOR } from "../colors";
// import { BLACK_COLOR } from "../colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      initialRouteName="Movie"
      sceneContainerStyle={{
        backgroundColor: isDark ? BLACK_COLOR : "white",
      }}
      screenOptions={{
        // tabBarLabelPosition: 'beside-icon',
        unmountOnBlur: true,
        tabBarStyle: { backgroundColor: isDark ? BLACK_COLOR : "white" },
        tabBarActiveTintColor: isDark ? YELLOW_COLOR : BLACK_COLOR,
        tabBarInactiveTintColor: isDark ? DARK_GREY : LIGHT_GREY,
        headerStyle: { backgroundColor: isDark ? BLACK_COLOR : "white" },
        headerTitleStyle: { color: isDark ? "white" : BLACK_COLOR },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600", marginTop: -6 },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          // headerRight: () => (
          //   <View>
          //     <Text>Hello</Text>
          //   </View>
          // ),
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
          tabBarBadge: 3,
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
