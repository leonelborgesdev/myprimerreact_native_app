import React, { useEffect, useState } from "react";
import { Text, StyleSheet, FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem.jsx";
import { config } from "dotenv";
config();

const ReposList = () => {
  const [videogames, setVideogames] = useState({ results: [] });

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
