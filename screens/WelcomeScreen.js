import React from 'react';
import { StyleSheet, Text,ImageBackground, View, Image, StatusBar} from 'react-native';
function WelcomeScreen(props) {
    return (
        <ImageBackground source={require("../assets/background.jpg")} style={styles.backGround}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image source={require("../assets/logo-red.png")} style={styles.logo}>
                    </Image>
                    <Text style={styles.logoText}> Sell What You Don't Want</Text>
                </View>
            </View>
        </ImageBackground>
    );
}
const styles = {
    backGround:{
        width: '100%',
        height:'100%'
    },
    logo:{
        width:100,
        height:100,
        top: StatusBar.currentHeight + 30,
        alignSelf: "center"
    },
    logoText: {
        top: StatusBar.currentHeight + 30,
        textAlign: "center",
        
    },
    container:{
        flex:1,
        justifyContent: "center"
    },
    imgContainer: {
        flex:1,
        alignSelf: "center"
    }
}

export default WelcomeScreen;