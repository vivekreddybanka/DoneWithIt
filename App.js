import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {  Button, StyleSheet, Image, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AuthContext from './auth/context';
import authStorage from './auth/storage';
import jwtDecode from 'jwt-decode';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [user, setUser] = useState();
  const [ready, setReady] = useState(false);

  // const netinfo = useNetInfo();
  const restoreToken = async() => {
    const token = await authStorage.getToken()
    if(token) {
      return setUser(jwtDecode(token));
    } else {
      return
    }
  }
  
  if(!ready)
    return <AppLoading startAsync={restoreToken} onFinish={() => {setReady(true)}}  onError={console.warn}/>

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
