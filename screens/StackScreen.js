//Stack Navigator to connect all the screen

import React, {useState} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import MainScreen from './MainScreen';
import TransferScreen from './TransferScreen';
import RecipientsScreen from './RecipientsScreen';
import BottomTabScreen from './BottomTabScreen';
//import credit_debitScreen from './credit_debitScreen';
=======
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import TransferScreen from './TransferScreen';
import RecipientsScreen from './RecipientsScreen';
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824

const Stack = createStackNavigator();

const StackScreen = ({navigation}) => (
<<<<<<< HEAD
    
=======
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
<<<<<<< HEAD
        <Stack.Screen name="MainScreen" component={MainScreen}/>
        <Stack.Screen name="TransferScreen" component={TransferScreen}/>
        <Stack.Screen name="RecipientsScreen" component={RecipientsScreen}/>
        {/* <Stack.Screen name="BottomTabScreen" component={BottomTabScreen}/> */}
=======
        <Stack.Screen name="TransferScreen" component={TransferScreen}/>
        <Stack.Screen name="RecipientsScreen" component={RecipientsScreen}/>
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824

    </Stack.Navigator>
);

<<<<<<< HEAD

=======
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
export default StackScreen;















