import React, { useRef } from 'react';

import {  View , StyleSheet, ScrollView} from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ ImageUris = [], onRemoveImage, OnAddImage }) {
    const scrollview = useRef()

    return (
        <View>
            <ScrollView horizontal ref={scrollview} onContentSizeChange= { () => scrollview.current.scrollToEnd()}>
                <View style = { styles.container }>
                    { ImageUris.map( uri => (
                        <View key = {uri} style={styles.image}>
                            <ImageInput
                                imageUri={ uri } 
                                onChangeImage={() => onRemoveImage(uri)}
                            >
                            </ImageInput>
                        </View>
                    ))}
                    <ImageInput onChangeImage={ (uri) => OnAddImage(uri)}></ImageInput>
                </View>
            </ScrollView>
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