import React, { useState } from 'react';
import {Button, Modal, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View, FlatList} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import {text} from '../config/styles'
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';
function AppPicker({icon, placeHolder,items, onSelectItem, selectedItem }) {
    const [modalvisable, setModalVisiable] = useState(false);
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisiable(!modalvisable)}>
                <View style = {styles.container}> 
                    {icon && <MaterialCommunityIcons name= {icon} size={20}  color={colors.medium} style={styles.icon}/>}
                    <AppText style={styles.text}>{selectedItem? selectedItem.label : placeHolder}</AppText>
                    <MaterialCommunityIcons name= "chevron-down" size={20}  color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalvisable} animationType="slide">
                <Screen> 
                    <Button title="Close" onPress={() => setModalVisiable(false)}></Button>
                    <FlatList data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) => <PickerItem label={item.label} onPress={() =>  {setModalVisiable(false); onSelectItem(item); console.log("Item is selected")}}   ></PickerItem>}
                    ></FlatList>
                </Screen>
            </Modal>
        </React.Fragment>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:  colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10

    },
    icon: {
        marginRight: 10
    },  
    textinput: {
        width: "100%",
        fontSize: 18,
        color: colors.dark,
        fontFamily: Platform.OS == "android"? "Roboto": "Avenir"
    },
    text: {
        flex:1
    }
})
export default AppPicker;