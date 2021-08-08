import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Button,Alert, Platform } from 'react-native';
import WelcomeScreen  from './screens/WelcomeScreen';
import ImageViewer from './screens/ImageViewer';
import AppButton from './Componets/AppButton';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
export default function App() {
  return (
    <View style={styles.containerTemp}>
       {/* <WelcomeScreen/> */}
       {/* <ImageViewer/> */}
       {/* <Card
        title="Red jacket for sale"
        subtitle="$100"
        image={require("./assets/jacket.jpg")}
       ></Card> */}
      <ListingDetailsScreen></ListingDetailsScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerTemp: {
    backgroundColor: '#f8f4f4',
    padding:20,
    paddingTop:100
  }
});
