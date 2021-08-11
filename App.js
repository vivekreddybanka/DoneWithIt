import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Switch, TextInput} from 'react-native';
import Screen from './Componets/Screen';
import AppPicker from './Componets/AppPicker';
import AppTextInput from './Componets/AppTextInput';

export default function App() {
  const categories = [
    {label: "Furniture", value:1},
    {label: "Clothing", value:2},
    {label: "Camera", value:3}
  ]
  const [isNew, SetisNew] = useState(false)
  const [Category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker icon="apps" placeHolder="Category" items ={categories }  selectedItem={Category} onSelectItem={(item) => setCategory(item)} ></AppPicker>
      <AppTextInput icon="email" placeHolder="Email"></AppTextInput>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
