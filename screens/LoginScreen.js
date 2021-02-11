import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import {Button,Input} from "react-native-elements";
import { KeyboardAvoidingView } from 'react-native';
// import {logoEZ} from './assets';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    navigation.navigate('Home')
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      {/* color scheme of status bar on personel phone */}
      <StatusBar style="light" />
      <Image style={styles.image} source={require("../assets/logoEZ.png")} />

      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          // autoFocus
          type='email'
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type='password'
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      {/* <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity> */}

      <Button containerStyle={styles.loginBtn} onPress={signIn} title='Login'/>
      <Button containerStyle={styles.loginBtn} 
        onPress={() => navigation.navigate('Register')}
        type='outline' 
        title='Register'/>
      {/* <View style={{height:100}}/> */}
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  },
  image :{
    width:200,
    height:200

  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  inputContainer:{
    width:400,
  },
  loginBtn: {
    width: 200,
    // borderRadius: 25,
    // height: 50,
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 10,
    // backgroundColor: "#2c6bed",
  },
})
