import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import StyledText from "./StyledText.jsx";
import Constants from "expo-constants";
import theme from "../theme.js";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    flexDirection: "row",
  },
  scroll: {
    paddingBottom: 15,
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 5,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});

const AppBarTap = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  const textStyles = [styles.text, active && styles.active];
  return (
    <Link to={to}>
      <StyledText fontWeight={"bold"} style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container} component={TouchableWithoutFeedback}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}
      >
        <AppBarTap active to={"/"}>
          Repositories
        </AppBarTap>
        <AppBarTap to={"/singin"}>Sing In</AppBarTap>
      </ScrollView>
    </View>
  );
};

export default AppBar;
