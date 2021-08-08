import React from 'react';
import {View, Image,  StyleSheet, TouchableHighlight} from "react-native"
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable  from 'react-native-gesture-handler/Swipeable';
function ListItem({image,title, subtitle, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    <Image style={styles.image} source={image}/>
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subtitle}>{subtitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20
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
        color: colors.black
    }
})

export default ListItem;