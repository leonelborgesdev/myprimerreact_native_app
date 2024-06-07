import React from "react";
import { Image, StyleSheet, View } from "react-native";
import StyledText from "./StyledText.jsx";
import RepositoryGenres from "./RepositoryGenres.jsx";
import RespositoryRatings from "./RepositoryRatings.jsx";
import theme from "../theme.js";

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyledText fontSize="subheading" fontWeight="bold">
      {props.name}
    </StyledText>
    <Image style={styles.image} source={{ uri: props.background_image }} />
    <StyledText>Fecha de Lanzamiento: {props.released}</StyledText>
    <StyledText>Rating Top: {props.rating_top}</StyledText>
    <StyledText style={styles.rating}>Rating: {props.rating}</StyledText>
    <RespositoryRatings {...props} />
    <RepositoryGenres {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  rating: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 4,
  },
});

export default RepositoryItem;
