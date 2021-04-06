<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
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
import { Input } from 'react-native-elements';
<<<<<<< HEAD
import VirtualKeyboard from 'react-native-virtual-keyboard';
import LoginScreen from './LoginScreen';
import RecipientsScreen from './RecipientsScreen';

// npm install -g firebase-tools
// import { useTheme } from 'react-native-paper';

//import { AuthContext } from '../components/context';

//import Users from '../model/users';

const TransferScreen = ({navigation}) => {

    const [amount,setAmount] = useState('')

    // const [data, setData] = React.useState({
    //     amount: '',
    // });


    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const textInputChange = (value) => {
        setAmount(value)
    }
    
    return (
      <View style={styles.container}>
          <Text>{"\n\n\n\n\n"}</Text>
          <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>

        
=======
import LoginScreen from './LoginScreen';
import RecipientsScreen from './RecipientsScreen';




const TransferScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        amount: '',
    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                amount: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                amount: val,
                check_textInputChange: false
            });
        }
    }

    return (
      <View style={styles.container}>
         <Text>{"\n\n\n\n\n"}</Text>
          <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>

>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <View style={styles.header}>
<<<<<<< HEAD
            <Text style={styles.textSign}> Amount You Would Like to Transfer:</Text>
            <Text style={styles.amount}>${amount}</Text>
            {/* <Text style={styles.text_header}>{"\n"}</Text>
            <Text style={styles.text_header}>{"\n"}</Text>
            <Text style={styles.text_header}>{"\n"}</Text>
            <Text style={styles.text_header}>{"\n"}</Text>
            <Text style={styles.text_header}>{"\n"}</Text> */}
            <Text style={styles.text_header}>Your Current Balance Is:</Text>
            <Text style={styles.text_header}>$2999.99</Text>
            {/* <TextInput
                keyboardType={'numeric'}
                onChangeText={(setCurrentValue) => this.setState({ setCurrentValue })}
            />  */}
            <VirtualKeyboard 
                color='purple' 
                //pressMode='numeric' 
                //This is what needs to be worked on
                pressMode='string'
                onPress={(val) => textInputChange(val)}
            /> 
=======
            <Text style={styles.text_header}> Enter the Amount You Would Like to Transfer Down Below:</Text>
            <Text style={styles.text_header}>{"\n"}</Text>
           
            <TextInput
                style={styles.text_input}
                placeholder="Enter Numeric Values Only"
                placeholderTextColor="black"
                numeric
                keyboardType={'numeric'}
                onChangeText={(val) => textInputChange(val)}
            />

            <Text style={styles.text_footer}>Your Current Balance Is:</Text>
            <Text style={styles.text_footer}>$50</Text>
            <Text style={styles.text_header}>{"\n"}</Text>
            <Text style={styles.text_header}>{"\n"}</Text>
       
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={() => navigation.navigate('RecipientsScreen')}
<<<<<<< HEAD
                    //This is what needs to be worked on
                    //onPress={() => {RecipientsScreen}}
=======
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.Login}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
<<<<<<< HEAD
                    }]}>Select a Recepient!</Text>
=======
                    }]}>ENTER</Text>
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
                </LinearGradient>
                </TouchableOpacity>

            </View>
            </View>
        </Animatable.View>
      </View>
    );
};

export default TransferScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#6970E3'
    },
<<<<<<< HEAD
    amount:{
        flex:1,
        justifyContent:'center',
        textAlign:'center',
        fontSize: 80,
        color: '#696FE2',
        paddingTop:100,
    },
=======
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
    header: {
        flex: 1,
        justifyContent: 'flex-start',
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
<<<<<<< HEAD
        color: 'gray',
=======
        color: '#4e0098',
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        textAlign:'center'
    },
<<<<<<< HEAD
=======
    text_input:{
        backgroundColor: '#D3D3D3',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20

    },
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
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
<<<<<<< HEAD
        fontWeight: 'bold',
        textAlign:'center'
    }
  });
=======
        fontWeight: 'bold'
    }
  });

>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
