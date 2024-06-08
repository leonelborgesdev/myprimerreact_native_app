import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import StyledText from "./StyledText.jsx";
import Constants from "expo-constants";
import theme from "../theme.js";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    flexDirection: "row",
    paddingBottom: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
    paddingHorizontal: 5,
  },
});

const AppBarTap = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <StyledText fontWeight={"bold"} style={styles.text}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container} component={TouchableWithoutFeedback}>
      <AppBarTap active to={"/"}>
        Repositories
      </AppBarTap>
      <AppBarTap active to={"/singin"}>
        Sing In
      </AppBarTap>
      <AppBarTap active to={"/singin"}>
        Register
      </AppBarTap>
      <AppBarTap active to={"/singin"}>
        Sub to Twitch Acount
      </AppBarTap>
      <AppBarTap active to={"/singin"}>
        Leo hi!
      </AppBarTap>
      <AppBarTap active to={"/singin"}>
        Sing In
      </AppBarTap>
    </View>
  );
};

export default AppBar;
