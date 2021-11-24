import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingScreen from "../screens/ListingScreen";
import React, { useState } from "react";
import FeedNavigator from "./FeedNavigator";
import AccountNavigation from "./AccountNavigation";
import TabBarIcon from "../Componets/TabBarIcons";
import NewListingButton from "./NewListingButton";

const Tabs = new createBottomTabNavigator();
const AppNavigator = () => {
   return ( <Tabs.Navigator screenOptions={{ showIcon: true }} >
        <Tabs.Screen name = "Feed" component={FeedNavigator} 
        options={{
            tabBarIcon:({focused, tintColor })=>(  
                <TabBarIcon name="home" color={tintColor} focused= {focused} size={25}/>  
            )  
          }}/>
        <Tabs.Screen name = "ListingEdit" component={ListingEditScreen}
            options={{
                tabBarButton: () => (
                    <NewListingButton/>
                ),
                tabBarIcon:({focused, tintColor})=>(  
                    <TabBarIcon name="plus-circle" focused= {focused} color={tintColor} size={25}/>  
                )  
              }}
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