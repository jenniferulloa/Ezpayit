import React from "react";
import { Router } from "@reach/router";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MainScreen from "./screens/MainScreen";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';
import apiKeys from './config/keys';
import LoadingScreen from "./screens/LoadingScreen";
import AddCard from "./screens/AddCard";
import TransferScreen from './screens/TransferScreen';
import SplashScreen from './screens/SplashScreen';
import RecipientsScreen from './screens/RecipientsScreen';
import {createStackNavigator} from '@react-navigation/stack';

import'intl';
import'intl/locale-data/jsonp/en'

const Stack = createStackNavigator();

const App = () =>  {

  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
  return (
    <NavigationContainer>
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
        <Stack.Screen name="MainScreen" component={MainScreen}/>
        <Stack.Screen name="TransferScreen" component={TransferScreen}/>
        <Stack.Screen name="RecipientsScreen" component={RecipientsScreen}/>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen}/>
        <Stack.Screen name="AddCard" component={AddCard}/>
    </Stack.Navigator>
      
    </NavigationContainer>
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
export default App;