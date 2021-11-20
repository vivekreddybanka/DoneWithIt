import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingScreen from "../screens/ListingScreen";
import React, { useState } from "react";
const Tabs = new createBottomTabNavigator();
const AppNavigator = () => {
   return ( <Tabs.Navigator>
        <Tabs.Screen name = "Listing" component={ListingScreen}/>
        <Tabs.Screen name = "ListingEdit" component={ListingEditScreen}/>
        <Tabs.Screen name = "Account" component={AccountScreen}/>
    </Tabs.Navigator>)
}

export default AppNavigator