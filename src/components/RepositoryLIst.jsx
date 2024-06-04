import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import videogames from "../data/videogames.js";

const ReposList = () => {
  return (
    <FlatList
      data={videogames.results}
      renderItem={({ item: game }) => (
        <View>
          <Text>{game.name}</Text>
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
