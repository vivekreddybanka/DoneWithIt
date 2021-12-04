import React, {useState} from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../Componets/Screen";
import { ErrorMessage, Form, FormField, SubmitButton } from "../Componets/forms";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {

  const [err, setErr] = useState('')
  const { logIn } = useAuth()
  const [showError, setShowError] = useState(false)

  const handleSubmit = async ({name, email, password}) => {
    console.log('Call is made success')
    const result = await usersApi.Register({name, email, password})
    console.log(result)
    if (!result.ok) {
      if(result.data) {
        setErr(result.data.error)
        setShowError(true)
      } else {
        setErr("Unexpected error has occured")
        setShowError(true)
      } 
    } else {
      const result= await authApi.login(email, password )
      console.log(result.data)
      logIn(result.data)

    }
    // // success full registration redirect 
    // const { data: authToken } = await authApi.login(email, password )
    // const { logIn } = useAuth()
    // logIn(authToken)
    // return
  }

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={err} visible={showError}/>
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
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
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;