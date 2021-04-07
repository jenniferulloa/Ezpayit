//Stack Navigator to connect all the screen

import React, {useState} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import TransferScreen from './TransferScreen';
import RecipientsScreen from './RecipientsScreen';

const Stack = createStackNavigator();

const StackScreen = ({navigation}) => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
        <Stack.Screen name="TransferScreen" component={TransferScreen}/>
        <Stack.Screen name="RecipientsScreen" component={RecipientsScreen}/>

    </Stack.Navigator>
);

export default StackScreen;















