import RegisterScreen from "../screens/RegisterScreen"
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import React from "react";

const Stack = new createStackNavigator();

const AuthNavigator = () => {
    return (<Stack.Navigator
    >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options = {{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} /> 
        <Stack.Screen name="Login" component={LoginScreen}/>
    </Stack.Navigator>)
}
export default AuthNavigator