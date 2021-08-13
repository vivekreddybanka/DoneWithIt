import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Switch, TextInput} from 'react-native';
import ListingScreen from './screens/ListingScreen';
import MessagesScreen from "./screens/MessagesScreen"

export default function App() {
  return (
    <MessagesScreen/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
