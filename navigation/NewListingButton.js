import React from "react"
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler";

export default function NewListingButton ({onPress}) {
    return (
        <TouchableOpacity onPress = {() => {
            onPress()
        }} > 
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40} ></MaterialCommunityIcons>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        backgroundColor: colors.primary,
        borderRadius:40,
        borderWidth: 10,
        height:60,
        width: 60,
        bottom: 25,
        borderColor: colors.white,
        justifyContent: "center"
    }
  });