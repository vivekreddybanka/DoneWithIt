import React from 'react';
import {View, Image,  StyleSheet} from "react-native"
import colors from '../config/colors';
import AppText from './AppText';
function ListItem({image,title, subtitle}) {
    return (
       <View style={styles.container}>
           <Image style={styles.image} source={image}/>
           <View>
               <AppText style={styles.title}>{title}</AppText>
               <AppText style={styles.subtitle}>{subtitle}</AppText>
           </View>
       </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    image:{
        width: 70,
        height: 70,
        borderRadius:50,
        marginRight:10
    },
    title: {
        fontWeight: "500"
    },
    subtitle: {
        color: colors.medium
    }
})

export default ListItem;