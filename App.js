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
import TransferScreen from './screens/TransferScreen';
import TransferScreen2 from './screens/TransferScreen2';
import SplashScreen from './screens/SplashScreen';
import QRCodeScan from './screens/QRCodeScan'
import RecipientsScreen from './screens/RecipientsScreen';
import BottomTabScreen from './screens/BottomTabScreen';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationScreen from "./screens/NotificationScreen";
import AddCardScreen from "./screens/AddCardScreen"
import AddMoneyScreen from "./screens/AddMoneyScreen"
import TransferMoneyScreen from './screens/TransferMoneyScreen';
import SearchScreen from './screens/SearchScreen';
import ProductScreen from './screens/ProductScreen';
import LedgerScreen from './screens/LedgerScreen';
import UserProfileScreen from './screens/UserProfileScreen';

// Don't delete, used to run app on Android devices
import 'intl';
import 'intl/locale-data/jsonp/en'

const Stack = createStackNavigator();

const App = () =>  {
  //if no firebase has been initialized yet, do so
  if (firebase.apps.length===0) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
  return (
    <NavigationContainer>
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{gestureEnabled:false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{gestureEnabled:false}}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{gestureEnabled:false}}/>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{gestureEnabled:false}}/>
        <Stack.Screen name="TransferScreen" component={TransferScreen}/>
        <Stack.Screen name="RecipientsScreen" component={RecipientsScreen}/>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen}/>
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} options={{gestureEnabled:false}}/>
        <Stack.Screen name="QRCodeScan" component ={QRCodeScan} options={{gestureEnabled:false}}/>
        <Stack.Screen name="TransferScreen2" component={TransferScreen2}/>
        <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
        <Stack.Screen name="AddCardScreen" component={AddCardScreen}/>
        <Stack.Screen name="AddMoneyScreen" component={AddMoneyScreen}/>
        <Stack.Screen name="TransferMoneyScreen" component={TransferMoneyScreen}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen}/>
        <Stack.Screen name="ProductScreen" component={ProductScreen}/>
        <Stack.Screen name="LedgerScreen" component={LedgerScreen}/>
        

        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen}/>
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