import React from 'react';
import { StyleSheet, Text,ImageBackground, View, Image, StatusBar,Button} from 'react-native';
import color from '../config/colors'
function ImageViewer(props) { 
    return (
        <View style={styles.container}>
            <View style={styles.btnClose}>
                <Button title="Close" color={color.primary} ></Button>
            </View>
            <View style={styles.deleteIcon}>
                <Button title="Delete" color={color.secondry}></Button>
            </View>
            <Image resizeMode="contain"
            style={styles.image}
            source={require("../assets/chair.jpg")}>

            </Image>
        </View>
    )
}

export default ImageViewer;
const styles = StyleSheet.create({ 
    container:{
        flex:1
    },
    btnClose: {
        position: "absolute",
        top: StatusBar.currentHeight + 40,
        left: 30,
    },
    deleteIcon:{
        position:"absolute",
        top: StatusBar.currentHeight + 40,
        right: 30
    },
    image: {
        width:"100%",
        height:"100%"
    }
})