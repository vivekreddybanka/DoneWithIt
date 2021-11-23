import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import ListItem from '../Componets/ListItem';
import Screen from '../Componets/Screen';
import colors from '../config/colors';
import Icon from '../Componets/Icon';
import ListItemSeparater from "../Componets/ListItemSeparater";
const menuItems = [
    {
        title: "My Listing",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.secondary
        },
        tagetScreen: 'MessagesScreen'
    }
]
function AccountScreen({navigation}) {

    const renderItem = ({ item }) => (
        <ListItem 
            title={item.title}
            subtitle= {item.description}
            IconComponet={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}></Icon>}
            onPress= {() => navigation.navigate(item.tagetScreen)}
        />
    );

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Vivek banka"
                    subtitle="vivekbankadev@gmail.com"
                    image={require('../assets/Naruto.jpg')}
                ></ListItem>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={renderItem}
                    ItemSeparatorComponent={ListItemSeparater}
                />
            </View>
            <View>
                <ListItem
                    title="Log Out"
                    IconComponet = {
                        <Icon name="logout" backgroundColor="#ffe66d"></Icon>
                    }
                >

                </ListItem>
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({ 
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})
export default AccountScreen;