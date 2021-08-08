import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import ListingScreen from './screens/ListingScreen';
export default function App() {
  return (
    <ListingScreen></ListingScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
