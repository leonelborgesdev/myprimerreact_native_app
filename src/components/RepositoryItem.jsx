import React from "react";
import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText.jsx";
import RepositoryGenres from "./RepositoryGenres.jsx";

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyledText fontSize="subheading" fontWeight="bold">
      {props.name}
    </StyledText>
    <StyledText>Fecha de Lanzamiento: {props.released}</StyledText>
    <StyledText>Rating: {props.rating}</StyledText>
    <StyledText>Rating Top: {props.rating_top}</StyledText>
    <RepositoryGenres {...props} />
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
