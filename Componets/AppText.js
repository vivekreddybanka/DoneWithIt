import React from 'react';
import { Platform, Text ,StyleSheet} from 'react-native';
import colors from '../config/colors';

function AppText({ children, style, ...otherProps }) {
    return (
        <Text style={ [styles.text, style]} {...otherProps} >{children}</Text>
    );
}



export default AppText;
const styles = StyleSheet.create({
    text: {
        color:colors.black,
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir"
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            }
        })
    }
})