import React from "react";
// import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: ${(props) => (props.selected ? "blue" : "red")};
`;

//// moving from Tabs to Stack navigator
const Movies = ({ navigation: { navigate } }) => (
  <Btn onPress={() => navigate("Stack", { screen: "Two" })}>
    <Title selected={false}>Movies</Title>
  </Btn>
);

export default Movies;
