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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tweets = ({ navigation }) => {
  return <Screen>
    <Text>
        Tweets
    </Text>
    <Button title="View Tweets"
      onPress= { () => navigation.navigate('TweetsDetails', { id: 1})}
    >

    </Button>
  </Screen>
}
const TweetDetail = ({ route }) => {
  return <Screen>
    <Text>
         Tweet Details {route.params.id}
    </Text>
  </Screen>
}

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor:'dodgerblue'},
      headerTintColor: 'white',
    }}
    >
    <Stack.Screen name="Tweets" options={{
      title: "Tweet Details"
    }} component={Tweets} />
    <Stack.Screen name="TweetsDetails"  component = { TweetDetail } />
  </Stack.Navigator>
) 
const Account = () => {
  return <Screen>
    <Text>
      Account
    </Text>
  </Screen> 
}

const AccountDetail = () => {
  return <Screen>
    <Text>
      AccountDetails
    </Text>
  </Screen>
}
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return <Tab.Navigator>
    <Tab.Screen name='Account' component={Account} ></Tab.Screen>
    <Tab.Screen name= 'AccountDetails' component= {AccountDetail} />
  </Tab.Navigator>
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
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
