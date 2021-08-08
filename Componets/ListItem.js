import React from 'react';
import {View, Image,  StyleSheet, TouchableHighlight} from "react-native"
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable  from 'react-native-gesture-handler/Swipeable';
function ListItem({image,title, subtitle, IconComponet,onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponet}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20,
        backgroundColor: colors.white
    },
    image:{
        width: 70,
        height: 70,
        borderRadius:50
    },
    title: {
        fontWeight: "500"
    },
    subtitle: {
        color: colors.black
    },
    detailContainer:{
        marginLeft: 10,
        justifyContent:"center"
    }
})

export default ListItem;