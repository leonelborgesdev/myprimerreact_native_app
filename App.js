import React from "react";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </React.Fragment>
  );
}
