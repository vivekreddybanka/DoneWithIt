import React, { useContext } from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import ListItem from '../Componets/ListItem';
import Screen from '../Componets/Screen';
import colors from '../config/colors';
import Icon from '../Componets/Icon';
import ListItemSeparater from "../Componets/ListItemSeparater";
import AuthContext from '../auth/context';
import authStorage from '../auth/storage'

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
    const { user, setUser} = useContext(AuthContext);
    
    const renderItem = ({ item }) => (
        <ListItem 
            title={item.title}
            subtitle= {item.description}
            IconComponet={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}></Icon>}
            onPress= {() => navigation.navigate(item.tagetScreen)}
        />
    );
    const handleLogOut = () => {
        setUser(null)
        authStorage.removeToken();
    }
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subtitle={user.email}
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
                    onPress={() => handleLogOut()}
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