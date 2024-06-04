import React from "react";
import { View, Text } from "react-native";
import videogames from "../data/videogames.js";

const ReposList = () => {
  return (
    <View>
      {videogames.results.map((game) => (
        <View>
          <Text>{game.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default ReposList;
