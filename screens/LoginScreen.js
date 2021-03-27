import React, { useState } from 'react';
import { Link } from "@reach/router";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    StyleSheet ,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

// import { useTheme } from 'react-native-paper';

//import { AuthContext } from '../components/context';

//import Users from '../model/users';

const LoginScreen = ({navigation}) => {

    // const [event, setevent] = React.useState({
    //     email: '',
    //     password: '',
    //     check_textInputChange: false,
    //     secureTextEntry: true,
    //   //  isValidUser: true,
    //    // isValidPassword: true,
    // });

    const[email, setEmail] = useState("");
    const[password,setPassword] = useState("");
    const [error, setError] = useState (null);
    const signInWithEmailAndPasswordHandler = 
            (event,email,password) => {
                event.preventDefault();
            };
    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if (name == 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
            setPassword(value);
        }   
    };

    // const textInputChange = (val) => {
    //     if( val.length != 0 ) {
    //         setevent({
    //             ...event,
    //             email: val,
    //             check_textInputChange: true,
    //            // isValidUser: true
    //         });
    //     } else {
    //         setevent({
    //             ...event,
    //             email: val,
    //             check_textInputChange: false,
    //            // isValidUser: false
    //         });
    //     }
    // }

    // const updateSecureTextEntry = () => {
    //     setevent({
    //         ...event,
    //         secureTextEntry: !event.secureTextEntry
    //     });
    // }

    // const handlePasswordChange = (val) => {
    //       setevent({
    //           ...event,
    //           password: val,
    //           isValidPassword: true
    //       });
    // }


    
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="envelope-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your email"
                    style={styles.textInput}
                    name = "userEmail"
                    value = {email}
                    id = "userEmail"
                    autoCapitalize="none"
                    onChangeText={(event) => onChangeHandler(event)}
                   // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {/* {event.check_textInputChange ? 
                // <Animatable.View      
                //     animation="bounceIn"
                // >
                //     <Feather 
                //         name="check-circle"
                //         color="green"
                //         size={20}
                //     />
                // </Animatable.View>
                : null} */}
            </View>
            {/* { event.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            } */}
        
            <Text style={[styles.text_footer,{
                marginTop: 35
                }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your password"
                    name = "userPassword"
                    value = {password}
                    id = "userPassword"
                    //secureTextEntry={event.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(event) => onChangeHandler(event)}
                />
                {/* <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {event.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity> */}
            </View>
   

            <TouchableOpacity>
                <Text style={{color: '#7D2AE8', marginTop:15,fontSize: 16}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={() => navigation.navigate('BottomTabScreen')}
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.Login}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('RegisterScreen')}
                    style={[styles.Login, {
                        borderColor: '#7D2AE8',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#7D2AE8'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#6970E3'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
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
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: 0,
        paddingLeft: 10,
        fontSize: 16,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
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
    }
  });

