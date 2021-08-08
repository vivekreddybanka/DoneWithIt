import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import ListItem from '../Componets/ListItem';
import Screen from '../Componets/Screen';
import ListItemSeparater from '../Componets/ListItemSeparater';
import ListItemDeleteAction from '../Componets/ListItemDeleteAction';
const Message= [
    {
        id:1,
        title:'T1',
        description: 'D1',
        image: require("../assets/Naruto.jpg")
    },
    {
        id:2,
        title:'T2',
        description: 'D2',
        image: require("../assets/Naruto.jpg")
    }
];
function MessagesScreen(props) {
    const [MsgArray, setMsgArray] = useState(Message);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = message => {
        const NewMsg =  MsgArray.filter(m => m.id !== message.id)
        setMsgArray(NewMsg)
    }
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
                data={MsgArray}
                keyExtractor={message => message.id.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={() => ListItemSeparater}
                refreshing={refreshing}
                onRefresh={() => {
                    setMsgArray([
                        {
                            id:3,
                            title:'T3',
                            description: 'D3',
                            image: require("../assets/Naruto.jpg")
                        },
                        {
                            id:4,
                            title:'T4',
                            description: 'D4',
                            image: require("../assets/Naruto.jpg")
                        }
                    ])
                }}
            > </FlatList>
        </Screen>
    );
}
const styles = StyleSheet.create({
   
})
export default MessagesScreen;