import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import videogames from "../data/videogames.js";

const ReposList = () => {
  return (
    <FlatList
      data={videogames.results}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: game }) => (
        <View
          key={game.id}
          style={{
            padding: 20,
            paddingBottom: 5,
            paddingTop: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            {game.name}
          </Text>
          <Text>Fecha de Lanzamiento: {game.released}</Text>
          <Text>Rating: {game.rating}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 4,
  },
});

export default ReposList;
