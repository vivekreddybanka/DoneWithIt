import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import MessagesScreen from './screens/MessagesScreen';
import Screen from './Componets/Screen';
import Icon from './Componets/Icon.js';
export default function App() {
  return (
    // <View style={styles.container}>
    //   <MessagesScreen/>
    // </View>
    <Screen>
      <Icon
        name="email"
        size={50}
        backGroundColor="black"
        iconColor="white"
      >

      </Icon>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
