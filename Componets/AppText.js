import React from 'react';
import { Platform, Text } from 'react-native';

function AppText({ children }) {
    return (
        <Text style={ styles.text}>{children}</Text>
    );
}



export default AppText;
const styles = StyleSheet.create({
    text: {
        color:"tomato",
        ...Platform.select({
            ios: {
                fontsize: 20,
                fontFamily: "Avenir"
            },
            android: {
                fontsize: 18,
                fontFamily: "Roboto"
            }
        })
    }
})