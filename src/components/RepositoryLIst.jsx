import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";
import videogames from "../data/videogames.js";
import RepositoryItem from "./RepositoryItem.jsx";

const ReposList = () => {
  return (
    <FlatList
      data={videogames.results}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: game }) => <RepositoryItem {...game} />}
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
