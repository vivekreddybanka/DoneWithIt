import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert} from 'react-native'
import colors from '../config/colors';
function ImageInput({ imageUri, onChangeImage }) {


    const requestPermissin = async () => {
        // const result =  Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION);
        // result.granted
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
        alert("You need to enable permission to access the camera");
        }
    }


    useEffect(() => {
        requestPermissin();
    },[]);

    const handlePress = () => {
        if (!imageUri) {
            selectImage() 
        } else {
            Alert.alert('Delete','Are you sure you want to delete this image?',
            [ {text: 'yes', onPress: () => onChangeImage(null)},
              {text: 'No'}
        ])
        }
    }
    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5
        });
          if(!result.cancelled) {
              onChangeImage(result.uri)
          }
        } catch (error) {
          
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (
                <MaterialCommunityIcons
                    color={colors.medium}
                    name="camera"
                    size={40}
                />
                )}
            {   imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
       
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: "center",
        marginVertical: 10,
        overflow: "hidden",
        width: 100,
      },
      image: {
        height: "100%",
        width: "100%",
      },
})
export default ImageInput;