import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {  Button, StyleSheet, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Screen from './Componets/Screen';
import * as Permissions from 'expo-permissions';
import ImageInput from './Componets/ImageInput';
import ImageInputList from './Componets/ImageInputList';  


export default function App() {
  const [imageUris, SetImageUris] = useState([]);
  const [imgUrl, SetImgUrl] = useState();

  const handleAddImages = (uri) => {
    SetImageUris([...imageUris, uri]);
  }
  const handleRemoveImage = (uri) => {
    SetImageUris(imageUris.filter((imageuri) => imageuri !== uri));
  }
  
  // const onchangeImg = (uri) => {
  //   SetImgUrl(uri)
  // }
  return (
    <Screen>
      <ImageInputList ImageUris = { imageUris } 
        OnAddImage= { handleAddImages}
        onRemoveImage = {handleRemoveImage}
      ></ImageInputList>
    </Screen>
    // <MessagesScreen/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
