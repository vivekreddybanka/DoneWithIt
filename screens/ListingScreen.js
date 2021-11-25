import React, { useEffect, useState } from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native'
import Screen from '../Componets/Screen';
import Card from "../Componets/Card"
import colors from '../config/colors';
import route from '../navigation/route';
import listings from '../api/listings';
import AppText from '../Componets/AppText';
import useApi from '../hooks/useApi';


function ListingScreen({ navigation }) {
    console.log(useApi(listings.getListings))
    const {data: listingsData, error,request : LoadListing} = useApi(listings.getListings);
    useEffect(() => {
        LoadListing();
    },[])

    
    const renderItem = ({ item }) => (
        <Card 
            title={item.title}
            subtitle= { "$" + item.price}
            image={item.images[0].url}
            onPress = { () => navigation.navigate(route.ListingDetails, item )}
        />
    ); 
    return (
       <Screen style={styles.screen}> 
           {error && < >
            <AppText> Couldnot retrieve the data.</AppText>
           </>}
           <FlatList
            data={listingsData}
            keyExtractor={listing => listing.id.toString()}
            renderItem={renderItem}
           >

           </FlatList>
       </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})
export default ListingScreen;