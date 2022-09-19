import React from "react";
import { TouchableOpacity, Text } from "react-native";

//// moving from Tabs to Stack navigator
const Movies = ({ navigation: { navigate } }) => (
  <TouchableOpacity
    onPress={() => navigate("Stack", { screen: "One" })}
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>Movies</Text>
  </TouchableOpacity>
);

export default Movies;
