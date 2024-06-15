import React from "react";
import Constants from "expo-constants";
import { View, Text } from "react-native";
import ReposList from "./RepositoryLIst.jsx";
import AppBar from "./AppBar";
import { Route, Routes } from "react-router-native";
import Login from "../Pages/Login.jsx";

const Main = () => {
  return (
    // Constants te permite ponerle un margen superior al texto de forma que
    // se ajuste al renderizar la vista en android o iOS
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<ReposList />} />
        <Route path="/singin" element={<Login />} />
      </Routes>
    </View>
  );
};

export default Main;
