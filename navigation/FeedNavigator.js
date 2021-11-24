import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import ListingScreen from "../screens/ListingScreen";
import ListingDetails from '../screens/ListingDetailsScreen'
import route from './route';
const stack = new createStackNavigator();

const FeedNavigator = () => (
    <stack.Navigator model='modal' screenOptions={{headerShown:false}}>
        <stack.Screen name="Listings" component={ListingScreen}/>
        <stack.Screen name="ListingDetails" component={ListingDetails} options={{headerShown:false}}/>
    </stack.Navigator>
)
export default FeedNavigator;