import React from "react";
import { Formik, useField } from "formik";
import { Button, StyleSheet, View } from "react-native";
import StyledTextInput from "../components/StyledTextInput.jsx";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <StyledTextInput
      value={field.value}
      onChangeText={(value) => helpers.setValue(value)}
      {...props}
    />
  );
};

const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue placeholder="E-mail" name="email" />
            <FormikInputValue placeholder="Password" name="password" />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
};

export default Login;
