//Reference: https://reactnavigation.org/docs/material-bottom-tab-navigator/
import React from 'react';
import { 
  Text,
  View, 
  StyleSheet,
  Button, 
  Image,
  Alert,
  TouchableOpacity
       } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainScreen from './MainScreen';
import LedgerScreen from './LedgerScreen';
import UserProfileScreen from './UserProfileScreen';
import QRCodeScan from './QRCodeScan'
import {icons} from "../constants";

const HomeStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const BottomTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"       
    >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#7158B7',
          tabBarIcon: () => (
            <Icon name="home" color="#fff" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ledger"
        component={LedgerScreen}
        options={{
          tabBarLabel: 'Ledger',
          tabBarColor: '#7158B7',
          tabBarIcon: () => (
            <Icon name="time-outline" color="#fff" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={QRCodeScan}
        options={{
          tabBarLabel: 'Scan & Pay',
          tabBarColor: '#7158B7',
          tabBarIcon: () => (
            <Image
                            source={icons.scan}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor:'#fff'
                            }}
                        />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#7158B7',
          tabBarIcon: () => (
            <Icon name="person" color="#fff" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default BottomTabScreen;

// const HomeStackScreen = ({navigation}) => (
// <HomeStack.Navigator>
//         <HomeStack.Screen name="Notification" component={NotificationScreen} options={{
//         title:'Overview',
//         headerLeft: () => (
//             <Icon.Button name="menu" size={25} backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//         }} />
// </HomeStack.Navigator>
// );
