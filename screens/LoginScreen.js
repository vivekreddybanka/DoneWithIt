import React, { useContext } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../Componets/Screen";
import { ErrorMessage, Form, FormField, SubmitButton } from "../Componets/forms";
import authApi from "../api/auth";
import { useState } from "react/cjs/react.development";
import jwtDecode from "jwt-decode";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});


function LoginScreen(props) {
  const authContext =  useContext(AuthContext)
  const handleSubmit = async ({email, password}) => {
    const result = await authApi.login(email, password) 
    if(!result.ok) return SetLoginFailed(true);
    SetLoginFailed(false);
    const user = jwtDecode(result.data)
    authContext.setUser(user);
    console.log(user);
  }
  const  [loginFailed, SetLoginFailed] = useState(false);

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invaild Email and Password" visible={loginFailed}/>
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;