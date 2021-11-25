import React, { useEffect, useState } from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import Screen from '../Componets/Screen';
import Card from "../Componets/Card"
import colors from '../config/colors';
import route from '../navigation/route';
import listings from '../api/listings';



function ListingScreen({ navigation }) {

    const [listingsData, setListings] = useState([]);
    useEffect(() => {
        LoadListing();
    },[])

    const LoadListing = async () => {
        
        const response = await listings.getListings()
        setListings(response.data);
    }
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