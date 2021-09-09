import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {  Button, StyleSheet, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Screen from './Componets/Screen';
import * as Permissions from 'expo-permissions';
import ImageInput from './Componets/ImageInput';


export default function App() {
  const [imageUri, SetImageUri] = useState();


  
  return (
    <Screen>
      <ImageInput onChangeImage={ (uri)  => (SetImageUri(uri))} imageUri={imageUri}/>
    </Screen>
    // <MessagesScreen/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
