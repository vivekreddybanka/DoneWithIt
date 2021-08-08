import React from 'react';
import { View , StyleSheet} from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({name,size=40,backGroundColor="#000", iconColor="#fff"}) {
    return (
       <View style={{
           width:size,
           height: size,
           borderRadius: size/2,
           backgroundColor: backGroundColor,
           justifyContent:"center",
           alignItems: "center"
       }}>
           <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}></MaterialCommunityIcons>
       </View>
    );
}
const styles = StyleSheet.create({
    iConCss: {
        flex: 1,
        justifyContent:"center"
    }
})
export default Icon;