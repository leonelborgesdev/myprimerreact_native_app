import React from "react";
import { Formik } from "formik";
import { Text, TextInput, View } from "react-native";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {() => {
        return (
          <View>
            <TextInput />
            <TextInput />
          </View>
        );
      }}
    </Formik>
  );
};

export default Login;
