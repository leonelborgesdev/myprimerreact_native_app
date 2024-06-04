import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import videogames from "../data/videogames.js";

const ReposList = () => {
  return (
    <View>
      {videogames.results.map((game) => (
        <View key={game.id}>
          <Image style={styles.image} source={{ uri: game.background_image }} />
          <Text>{game.name}</Text>
          <Text>Fecha de Lanzamiento: {game.released}</Text>
          <Text>Rating: {game.rating}</Text>
          <Text>
            Generos:
            {game.genres.map((genre) => (
              <React.Fragment
                key={genre.id}
              >{` [${genre.name}]`}</React.Fragment>
            ))}
          </Text>
        </View>
      ))}
    </View>
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
