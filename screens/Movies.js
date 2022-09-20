import React from "react";
// import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

//// moving from Tabs to Stack navigator
const Movies = ({ navigation: { navigate } }) => (
  <Btn onPress={() => navigate("Stack", { screen: "Two" })}>
    <Title>Movies</Title>
  </Btn>
);

export default Movies;
