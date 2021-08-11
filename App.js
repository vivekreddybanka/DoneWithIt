import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput} from 'react-native';
import ListingScreen from './screens/ListingScreen';
import Screen from './Componets/Screen';
import AppTextInput from './Componets/AppTextInput';

export default function App() {
  const [firstName,SetfirstName] = useState('');
  return (
    <Screen>
      <AppTextInput icon="email"/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
