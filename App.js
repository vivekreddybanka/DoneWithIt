import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {  Button, StyleSheet, Image, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AuthContext from './auth/context';

export default function App() {
  const [user, setUser] = useState();
  // const netinfo = useNetInfo();

  // console.log(netinfo)
  return (
    <AuthContext.Provider value={{user, setUser}}>
        <NavigationContainer theme={navigationTheme}>
          { user ? <AppNavigator/>:<AuthNavigator/> }
      </NavigationContainer>
    </AuthContext.Provider>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
