//Stack Navigator to connect all the screen

import React, {useState} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import MainScreen from './MainScreen';
import TransferScreen from './TransferScreen';
import RecipientsScreen from './RecipientsScreen';
import BottomTabScreen from './BottomTabScreen';
//import credit_debitScreen from './credit_debitScreen';

const Stack = createStackNavigator();

const StackScreen = ({navigation}) => (
    
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
        {/* <Stack.Screen name="TransferScreen" component={TransferScreen}/>
        <Stack.Screen name="RecipientsScreen" component={RecipientsScreen}/>
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen}/> */}

    </Stack.Navigator>
);


export default StackScreen;















