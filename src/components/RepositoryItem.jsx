import React from "react";
import { StyleSheet, View } from "react-native";
import StyledText from "./StyledTest.jsx";

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyledText big bold>
      {props.name}
    </StyledText>
    <StyledText blue>Fecha de Lanzamiento: {props.released}</StyledText>
    <StyledText small>Rating: {props.rating}</StyledText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  strong: {
    color: "#09f",
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default RepositoryItem;
