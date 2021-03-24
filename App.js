import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

//import { useEffect } from 'react';

import StackScreen from './screens/StackScreen';
import DrawerScreen from './screens/DrawerScreen';




//import { AuthContext } from './components/context';

const App = () =>  {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
 
  return (
    <NavigationContainer>
   {/* { loginState.userToken == null ? ( */}
      <DrawerScreen/>
    {/* )
    :
      <StackScreen/>
    } */}
  </NavigationContainer>



    // <NavigationContainer>
    // <StackScreen/>
    //   {/* <Stack.Navigator screenOptions={globalScreenOptions}> */}
    //     {/* <Stack.Screen name='Login' component={LoginScreen}/> */}
    //     {/* <Stack.Screen name='Register' component={RegisterScreen}/> */}
    //     {/* <Stack.Screen name='Home' component={mainScreen}/> */}
      
    // </NavigationContainer>
    
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

