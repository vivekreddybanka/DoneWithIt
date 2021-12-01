import React from 'react';
import { View,StyleSheet} from 'react-native'
import AppText from '../Componets/AppText';
import colors from '../config/colors';
import ListItem from '../Componets/ListItem';
import {Image} from 'react-native-expo-image-cache'

function ListingDetailsScreen({ route }) {
    const listing = route.params
    return (
       <View>
           <Image uri={listing.images[0].url} preview= {listing.images[0].thumbnailUrl} tint='light' style={styles.image }></Image>
           <View style={styles.detailsContainer}>
                <AppText style={styles.title}> {listing.title}</AppText>
                <AppText style={styles.subTitle}> $ {listing.price} </AppText>
           </View>
           <View style={styles.userContainer}>
                <ListItem
                    image={require("../assets/Naruto.jpg")}
                    title="Vivek"
                    subtitle="5 Listings"
                >

                </ListItem>
           </View>
           
       </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer:{
        padding:20
    },
    title: {
        fontSize:24,
        fontWeight: "500"
    },
    subTitle : {
        color: colors.secondary
    },
    userContainer: {
        marginVertical:20
    }
})
export default ListingDetailsScreen;