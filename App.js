import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import RegisterScreen from './screens/RegisterScreen';
import mainScreen from './screens/mainScreen';


const Stack = createStackNavigator();
const globalScreenOptions= {
  headerStyle:{backgroundColor:'#2c6bed'},
  headerTitleStyle:{color:'white'},
  headerTintColor:'white',
}

export default function App() {
 

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='Home' component={mainScreen}/>
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
