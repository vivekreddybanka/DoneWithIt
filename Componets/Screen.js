import React from 'react';
import { StyleSheet, SafeAreaView ,View} from 'react-native';
import Constants from 'expo-constants';
function Screen({children}) {
    return (
       <SafeAreaView style={styles.screen}>
           <View>{children}</View>
       </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "yellow",
        flex: 1
    }
})
export default Screen;