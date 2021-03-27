import React from "react";
import { Router } from "@reach/router";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MainScreen from "./screens/MainScreen";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import StackScreen from './screens/StackScreen';

const App = () =>  {
  return (
    <NavigationContainer>
    <StackScreen/>
      {/* <Stack.Navigator screenOptions={globalScreenOptions}> */}
        {/* <Stack.Screen name='Login' component={LoginScreen}/> */}
        {/* <Stack.Screen name='Register' component={RegisterScreen}/> */}
        {/* <Stack.Screen name='Home' component={mainScreen}/> */}
      
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