import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {  Button, StyleSheet, Image, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

export default function App() {
  // const netinfo = useNetInfo();

  // console.log(netinfo)
  return (
    <NavigationContainer theme={navigationTheme}>
        <AuthNavigator></AuthNavigator>
        {/* <AppNavigator></AppNavigator> */}
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
