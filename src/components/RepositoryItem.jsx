import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <Text style={styles.strong}>{props.name}</Text>
    <Text>Fecha de Lanzamiento: {props.released}</Text>
    <Text>Rating: {props.rating}</Text>
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
