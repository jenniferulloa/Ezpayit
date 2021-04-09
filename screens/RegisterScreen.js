import React, { useState } from 'react';
//import firebaseConfig from 'firebase';
// import "firebase/auth";
// import "firebase/firestore";
import { Link } from "@reach/router";
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    StyleSheet,
    ScrollView,
    Alert,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MainScreen from './MainScreen'
import { set } from 'react-native-reanimated';
import { registration } from '../config/firebaseMethods';


const RegisterScreen = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    var created_at = Date.now();
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const emptyState = () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    };
  
    const handlePress = () => {
      if (!firstName) {
        Alert.alert('First name is required');
      } else  if (!lastName) {
        Alert.alert('First name is required');
      } else if (!email) {
        Alert.alert('Email field is required.');  
      } else if (!password) {
        Alert.alert('Password field is required.');
      } else if (!confirmPassword) {
        setPassword('');
        Alert.alert('Confirm password field is required.');
      } else if (password !== confirmPassword) {
        Alert.alert('Password does not match!');
      } else {
        registration(
          email,
          password,
          lastName,
          firstName,
          created_at
        );
        navigation.navigate('LoadingScreen');
        emptyState();
      }
    };
    
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>First Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your first name"
                    style={styles.textInput}
                    type="text"
                    value = {firstName}
                    autoCapitalize="none"
                    autoCompleteType ='off'
                    autoCorrect = {false}
                    onChangeText={(text) => setFirstName(text)}
                />
         
              </View>

                <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Last Name</Text>
                <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput
                    placeholder="Your last name"
                    style={styles.textInput}
                    value = {lastName}
                    autoCapitalize="none"
                    onChangeText={(text) => setLastName(text)}
                />
              </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Email</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="envelope-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your email"
                    value = {email}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(email) => setEmail(email)}
                    keyboardType = 'email-address'
                />
               
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry ={true}
                    style={styles.textInput}
                    value = {password}
                    autoCapitalize="none"
                    onChangeText={(password) => setPassword(password)}
                />
               
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Confirm Your Password"
                    secureTextEntry
                    style={styles.textInput}
                    value = {confirmPassword}
                    autoCapitalize="none"
                    onChangeText={(password2) => setConfirmPassword(password2)}
                />
            </View>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up, you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={handlePress}
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.Login}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('LoginScreen')}
                    style={[styles.Login, {
                        borderColor: '#7D2AE8',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#7D2AE8'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#6970E3'
    },
    header: {
        flex: 0.8,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3.2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 32
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: 0,
        paddingLeft: 10,
        fontSize: 16,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    Login: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        fontSize: 15,
        color: '#7D2AE8'
    }
  });

