import React from "react";
import { Text, View } from "react-native";

const RepositoryItem = (props) => (
  <View
    key={props.id}
    style={{
      padding: 20,
      paddingBottom: 5,
      paddingTop: 5,
    }}
  >
    <Text style={{ fontWeight: "bold", marginBottom: 5 }}>{props.name}</Text>
    <Text>Fecha de Lanzamiento: {props.released}</Text>
    <Text>Rating: {props.rating}</Text>
  </View>
);

export default RepositoryItem;
