import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {  Button, StyleSheet, Image, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import AuthContext from './auth/context';
import authStorage from './auth/storage';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [user, setUser] = useState();
  const [ready, setReady] = useState(false);

  // const netinfo = useNetInfo();
  const restoreUser = async() => {
    const user = await authStorage.getUser()
    if(user) setUser(user)
  }
  
  if(!ready)
    return <AppLoading startAsync={restoreUser} onFinish={() => {setReady(true)}}  onError={console.warn}/>

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
