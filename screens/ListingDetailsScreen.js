import React from 'react';
import { View, Image, StyleSheet} from 'react-native'
import AppText from '../Componets/AppText';
import colors from '../config/colors';
import ListItem from '../Componets/ListItem';
function ListingDetailsScreen(props) {
    return (
       <View>
           <Image source={require('../assets/jacket.jpg')} style={styles.image}></Image>
           <View style={styles.detailsContainer}>
                <AppText style={styles.title}> Red jacket for sale</AppText>
                <AppText style={styles.subTitle}> $100</AppText>
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