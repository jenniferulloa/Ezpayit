<<<<<<< HEAD
import React from "react";
import { Router } from "@reach/router";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MainScreen from "./screens/MainScreen";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import StackScreen from './screens/StackScreen';
//import firebase from './src/firebase';

import'intl';
import'intl/locale-data/jsonp/en'


const App = () =>  {
=======
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import { useEffect } from 'react';


import StackScreen from './screens/StackScreen';
import LoginScreen from './screens/LoginScreen';

//import { AuthContext } from './components/context';

const App = () =>  {
 
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
  return (
    <NavigationContainer>
    <StackScreen/>
      {/* <Stack.Navigator screenOptions={globalScreenOptions}> */}
        {/* <Stack.Screen name='Login' component={LoginScreen}/> */}
        {/* <Stack.Screen name='Register' component={RegisterScreen}/> */}
        {/* <Stack.Screen name='Home' component={mainScreen}/> */}
      
    </NavigationContainer>
<<<<<<< HEAD
=======
    
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
<<<<<<< HEAD
export default App;
=======

export default App;

>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
