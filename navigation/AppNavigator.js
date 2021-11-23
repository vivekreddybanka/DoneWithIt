import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingScreen from "../screens/ListingScreen";
import React, { useState } from "react";
import FeedNavigator from "./FeedNavigator";
import AccountNavigation from "./AccountNavigation";

const Tabs = new createBottomTabNavigator();
const AppNavigator = () => {
   return ( <Tabs.Navigator>
        <Tabs.Screen name = "Feed" component={FeedNavigator} options = {{ headerShown : false }}/>
        <Tabs.Screen name = "ListingEdit" component={ListingEditScreen}/>
        <Tabs.Screen name = "Account" component={AccountNavigation}/>
    </Tabs.Navigator>)
}

export default AppNavigator