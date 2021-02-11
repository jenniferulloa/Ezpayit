import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button,Input} from "react-native-elements";
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.textInput}>
        <Text style={{fontSize:40}}>Welcome to</Text>
        <Text style={{fontSize:40}}>EZPayit!</Text>
        <Text style={{paddingTop:20}}>Register to continue</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <Input placeholder="First Name" type="text"/>
        <Input placeholder="Last Name" type="text"/>
        <Input placeholder="Email" type="email"/>
        <Input placeholder="Password" type="password"/>
        <Input placeholder="confirm Password" type="password"/>
      </View>
      
      <Button containerStyle={styles.button} title='Sign up'/>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  },
  inputContainer:{
    width:400,
  },
  button:{
    width:200,
    marginBottom:10,
  },
  textInput:{
   alignSelf: 'flex-start',
   paddingBottom:20,
  }
})
