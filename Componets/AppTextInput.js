import React from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import {text} from '../config/styles'

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style = {styles.container}> 
            {icon && <MaterialCommunityIcons name= {icon} size={20}  color={colors.medium} style={styles.icon}/>}
            <TextInput style={[styles.textinput, text]} {...otherProps}></TextInput>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:  colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10

    },
    icon: {
        marginRight: 10
    },  
    textinput: {
        width: "100%",
        fontSize: 18,
        color: colors.dark,
        fontFamily: Platform.OS == "android"? "Roboto": "Avenir"
    }
})
export default AppTextInput;