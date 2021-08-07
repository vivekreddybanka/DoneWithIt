import React from 'react';
import { StyleSheet, Text,ImageBackground, View, Image, StatusBar,Button} from 'react-native';
import AppButton from '../Componets/AppButton';
import colors from '../config/colors';
function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={10} source={require("../assets/background.jpg")} style={styles.backGround}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image source={require("../assets/logo-red.png")} style={styles.logo}>
                    </Image>
                    <Text style={styles.logoText}> Sell What You Don't Want</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login"></AppButton>
                <AppButton title="Register" color="secondary"></AppButton>
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
    }
    
})

export default WelcomeScreen;