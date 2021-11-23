import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import Screen from '../Componets/Screen';
import Card from "../Componets/Card"
import colors from '../config/colors';

const Listing = [
    {
        id:1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id:2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg')
    }
]

function ListingScreen({ navigation }) {

    const renderItem = ({ item }) => (
        <Card 
            title={item.title}
            subtitle= { "$" + item.price}
            image={item.image}
            onPress = { () => navigation.navigate('ListingDetails', item )}
        />
    ); 
    return (
       <Screen style={styles.screen}>
           <FlatList
            data={Listing}
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