import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Button,Alert, Platform } from 'react-native';
import WelcomeScreen  from './screens/WelcomeScreen';
import ImageViewer from './screens/ImageViewer';
export default function App() {
  return (
    <View style={styles.container}>
       {/* <WelcomeScreen/> */}
       <ImageViewer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
