import React from 'react';
import { StyleSheet, Text,ImageBackground, View, Image, StatusBar,Button} from 'react-native';
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
            <View style={styles.buttonContainer}>
                <Button style={styles.buttonLgn} title="Login"></Button>
                <Button style={styles.buttonSignIn} title="Sign In"></Button>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
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
    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    buttonLgn:{
        width:"100%",
        backgroundColor: "#2a9d8f"
    },
    buttonSignIn: {
        width: "100%",
        backgroundColor: "#e9c46a"
    }
})

export default WelcomeScreen;