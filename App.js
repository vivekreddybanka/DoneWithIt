import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Button,Alert, Platform } from 'react-native';
import WelcomeScreen  from './screens/WelcomeScreen';
import ImageViewer from './screens/ImageViewer';
import AppButton from './Componets/AppButton';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import MessagesScreen from './screens/MessagesScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <MessagesScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
