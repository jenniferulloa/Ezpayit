import React, { useState } from 'react';
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

        
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <View style={styles.header}>
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
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={() => navigation.navigate('RecipientsScreen')}
                    //This is what needs to be worked on
                    //onPress={() => {RecipientsScreen}}
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.Login}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Select a Recepient!</Text>
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
    amount:{
        flex:1,
        justifyContent:'center',
        textAlign:'center',
        fontSize: 80,
        color: '#696FE2',
        paddingTop:100,
    },
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
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        textAlign:'center'
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
        fontWeight: 'bold',
        textAlign:'center'
    }
  });
