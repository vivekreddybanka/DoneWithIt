import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import AccountScreen from './screens/AccountScreen';
export default function App() {
  return (
   <AccountScreen></AccountScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
