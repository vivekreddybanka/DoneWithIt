import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {  Button, StyleSheet, Image, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Screen from './Componets/Screen';
import * as Permissions from 'expo-permissions';
import ImageInput from './Componets/ImageInput';
import ImageInputList from './Componets/ImageInputList';  
import { screensEnabled } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Tweets = ({ navigation }) => {
  return <Screen>
    <Text>
        Tweets
    </Text>
    <Button title="View Tweets"
      onPress= { () => navigation.navigate('TweetsDetails')}
    >

    </Button>
  </Screen>
}
const TweetDetail = () => {
  return <Screen>
    <Text>
         Tweet Details
    </Text>
  </Screen>
}

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetsDetails"  component = { TweetDetail } />
  </Stack.Navigator>
) 

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
  // const [imageUris, SetImageUris] = useState([]);
  // const [imgUrl, SetImgUrl] = useState();

  // const handleAddImages = (uri) => {
  //   SetImageUris([...imageUris, uri]);
  // }
  // const handleRemoveImage = (uri) => {
  //   SetImageUris(imageUris.filter((imageuri) => imageuri !== uri));
  // }
  
  // // const onchangeImg = (uri) => {
  // //   SetImgUrl(uri)
  // // }
  // return (
  //   <Screen>
  //     <ImageInputList ImageUris = { imageUris } 
  //       OnAddImage= { handleAddImages}
  //       onRemoveImage = {handleRemoveImage}
  //     ></ImageInputList>
  //   </Screen>
  //   // <MessagesScreen/>
  // )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
