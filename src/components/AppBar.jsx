import React from "react";
import { ViewPropTypes, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";
import Constants from "expo-constants";
import theme from "../theme.js";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.primaryText,
  },
});

const appBar = () => {
  return (
    <View styles={styles.container}>
      <StyleSheet fontWeight="bold" styles={styles.text}>
        Repositories
      </StyleSheet>
    </View>
  );
};

export default appBar;
