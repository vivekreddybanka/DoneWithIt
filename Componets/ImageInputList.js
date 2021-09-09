import React from 'react';

import {  View , StyleSheet } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ ImageUris = [], onRemoveImage, OnAddImage }) {
    return (
       <View style = { styles.container }>
            { ImageUris.map((uri) => {
                console.log('uri in ImageInput  ' + uri );
                    <ImageInput
                        imageUri={uri}
                        onChangeImage={() => onRemoveImage(uri)}
                    >
                    </ImageInput>
             })
            }
            <ImageInput onChangeImage={ (uri) => OnAddImage(uri)}></ImageInput>
       </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    image: {
        marginRight: 10
    }
})

export default ImageInputList;