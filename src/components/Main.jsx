import React from "react";
import Constants from "expo-constants";
import { View } from "react-native";
import ReposList from "./RepositoryLIst.jsx";
import AppBar from "./AppBar.jsx";

const Main = () => {
  return (
    // Constants te permite ponerle un margen superior al texto de forma que
    // se ajuste al renderizar la vista en android o iOS
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <AppBar />
      <ReposList />
    </View>
  );
};

export default Main;
