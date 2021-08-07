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
        fontsize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})