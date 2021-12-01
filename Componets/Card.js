import React from 'react';
import {View, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../config/colors';
import AppText from './AppText';
import  { Image } from 'react-native-expo-image-cache'

function Card({title, subtitle,image, onPress, thumbnailUrl}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.Card}>
                <Image uri={image} preview = {{ uri: thumbnailUrl}} tint = "light" style={ styles.image }/>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subtitle}>{subtitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback> 
    );
}
const styles = StyleSheet.create({
    Card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width:"100%",
        height:200
    },
    title: {
        marginBottom: 7
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})
export default Card;