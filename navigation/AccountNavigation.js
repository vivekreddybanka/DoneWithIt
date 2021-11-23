import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from '../screens/MessagesScreen'
const stack = new createStackNavigator();

const AccountNavigation = () => (
    <stack.Navigator >
        <stack.Screen name="AccountScreen" component={AccountScreen}/>
        <stack.Screen name="MessagesScreen" component={MessagesScreen} options={{headerShown:false}}/>
    </stack.Navigator>
)
export default AccountNavigation;