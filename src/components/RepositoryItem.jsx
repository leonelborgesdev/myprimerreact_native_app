import React from "react";
import { Image, StyleSheet, View } from "react-native";
import StyledText from "./StyledText.jsx";
import RepositoryGenres from "./RepositoryGenres.jsx";
import RespositoryRatings from "./RepositoryRatings.jsx";
import theme from "../theme.js";

const RepositoryItemHeader = (props) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: props.background_image }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontSize="subheading" fontWeight="bold">
        {props.name}
      </StyledText>
      <StyledText color="secondary">
        Fecha de lanzamiento: {props.released}
      </StyledText>
      <StyledText color="secondary">Rating Top: {props.rating_top}</StyledText>
      <StyledText style={styles.rating}>Rating: {props.rating}</StyledText>
    </View>
  </View>
);

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RespositoryRatings {...props} />
    <RepositoryGenres {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  rating: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    marginVertical: 4,
    marginBottom: 4,
    marginTop: 4,
    overflow: "hidden",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 4,
  },
});

export default RepositoryItem;
