import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingScreen from "../screens/ListingScreen";
import React, { useState, useEffect } from "react";
import FeedNavigator from "./FeedNavigator";
import AccountNavigation from "./AccountNavigation";
import TabBarIcon from "../Componets/TabBarIcons";
import NewListingButton from "./NewListingButton";
import route from "./route";
import * as Notifications  from 'expo-notifications'
import * as permissions from 'expo-permissions'
import expoPushTokens from "../api/expoPushTokens";

const Tabs = new createBottomTabNavigator();
const AppNavigator = () => {
    useEffect(() => {
        registerForPushNotifications();
    },[])
    const registerForPushNotifications = async () => {
        try {
            const Permission = await permissions.askAsync(permissions.NOTIFICATIONS);
            if(!Permission.granted) {
                return;
            }
            const token = await Notifications.getExpoPushTokenAsync();
            expoPushTokens.register(token.data)
        } catch (error) {
            console.log('Error in the push notification', error)
        }
       
    }

   return ( <Tabs.Navigator screenOptions={{ showIcon: true }} >
        <Tabs.Screen name = "Feed" component={FeedNavigator} 
        options={{
            tabBarIcon:({focused, tintColor })=>(  
                <TabBarIcon name="home" color={tintColor} focused= {focused} size={25}/>  
            )  
          }}/>
        <Tabs.Screen name = "ListingEdit" component={ListingEditScreen}
            options={ ({navigation})  => ({
                tabBarButton: () => (
                    <NewListingButton onPress = {() => navigation.navigate(route.ListingEdit)}/>
                ),
                tabBarIcon:({focused, tintColor})=>(  
                    <TabBarIcon name="plus-circle" focused= {focused} color={tintColor} size={25}/>  
                )  
              })}
        />
        <Tabs.Screen name = "Account" component={AccountNavigation}
        options={{
            tabBarIcon:({focused, tintColor})=>(  
                <TabBarIcon name="account" focused = {focused} color={tintColor} size={25}/>  
            )  
          }}
          />
    </Tabs.Navigator>)
}

export default AppNavigator