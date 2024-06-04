import React from "react";
import Constants from "expo-constants";
import { Text, View } from "react-native";

const Main = () => {
  return (
    // Constants te permite ponerle un margen superior al texto de forma que
    // se ajuste al renderizar la vista en android o iOS
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>VideoGame Repository</Text>
    </View>
  );
};

export default Main;
