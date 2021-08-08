import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import ListItem from '../Componets/ListItem';
import Screen from '../Componets/Screen';
import ListItemSeparater from '../Componets/ListItemSeparater';
import ListItemDeleteAction from '../Componets/ListItemDeleteAction';
const Message= [
    {
        id:1,
        title:'T1',
        decription: 'D1',
        image: require("../assets/Naruto.jpg")
    },
    {
        id:2,
        title:'T2',
        decription: 'D2',
        image: require("../assets/Naruto.jpg")
    }
];
function MessagesScreen(props) {
    const renderItem = ({ item }) => (
        <ListItem 
            title={item.title}
            subtitle= {item.description}
            image={item.image}
            onPress={() => console.log("Message is selected.")}
            renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
        />
    );
    
    return (
        <Screen>
            <FlatList
                data={Message}
                keyExtractor={message => message.id.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={() => ListItemSeparater}
            > </FlatList>
        </Screen>
    );
}
const styles = StyleSheet.create({
   
})
export default MessagesScreen;