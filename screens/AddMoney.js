import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import { RadioButton } from 'react-native-paper';


import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const AddMoney = ({navigation}) => {

    const [data, setData] = React.useState({
    
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

const [checked, setChecked] = React.useState('first');       

const products = [
    {
      id: 1,
      data : [
        {
          label: 'Credit/Debit Card',
        },
        {
          label: 'Add new payment method',
        },
        {
          label: 'Check',
          
        },
        {
          label: 'Electronic transfer',
            
        },
      ]
    },
];

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Add Money</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Enter the amount</Text>

            <View style = {styles.box}>
               <TextInput style = {styles.input}
                  keyboardType = 'numeric'                 
                  placeholder = "Amount"                 
                  autoCapitalize = "none"/>
                </View> 
    

                <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Choose a deposit method</Text>
            <View style={styles.radioButtonContainer}>
   <TouchableOpacity onPress={() => {}} style={styles.radioButton}>
     <View style={styles.radioButtonIcon} />
   </TouchableOpacity>
   <TouchableOpacity onPress={() => {}}>
     <Text style={styles.radioButtonText, {
                marginTop:25          
            }}>Credit/Debit Card</Text>
     
   </TouchableOpacity>
 </View>

 <View style={styles.radioButtonContainer}>
   <TouchableOpacity onPress={() => {}} style={styles.radioButton}>
     <View style={styles.radioButtonIcon} />
   </TouchableOpacity>
   <TouchableOpacity onPress={() => {}}>
     <Text style={styles.radioButtonText, {
                marginTop:25          
            }}>Add new payment method</Text>
     
   </TouchableOpacity>
 </View>

 <View style={styles.radioButtonContainer}>
   <TouchableOpacity onPress={() => {}} style={styles.radioButton}>
     <View style={styles.radioButtonIcon} />
   </TouchableOpacity>
   <TouchableOpacity onPress={() => {}}>
     <Text style={styles.radioButtonText, {
                marginTop:25          
            }}>Electronic transfer</Text>
     
   </TouchableOpacity>
 </View>

 <View style={styles.radioButtonContainer}>
   <TouchableOpacity onPress={() => {}} style={styles.radioButton}>
     <View style={styles.radioButtonIcon} />
   </TouchableOpacity>
   <TouchableOpacity onPress={() => {}}>
     <Text style={styles.radioButtonText, {
                marginTop:25          
            }}>Check</Text>
     
   </TouchableOpacity>
 </View>

            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={() => {}}
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.Login}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Out</Text>
                </LinearGradient>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default AddMoney;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#6970E3'
    },
    box: {
        paddingTop: 23
    }, 
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
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
    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 45
        
      },
      radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        marginRight: 20
       
      },
      radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7
               
      },
      radioButtonText: {
        fontSize: 20,
        marginLeft: 10
        
      },

    });

