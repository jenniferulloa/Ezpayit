import React, {useEffect, useState} from 'react'
import { 
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  StatusBar,
  Alert,
  Dialog,
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import {Button,Input} from "react-native-elements";
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as firebase from 'firebase';
import {logOut} from '../config/firebaseMethods';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DialogInput from 'react-native-dialog-input';




import {screenHeight, screenWidth} from '../config/dimension';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';



const AccountScreen = ({navigation}) => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  var total_balance = 2999.99;


  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);
  const [billingAddress,setBillingAddress] = useState('');

  const [didMount, setDidMount] = useState(false); 

  useEffect(() => {
    async function getUserInformation(){
      try {
      setDidMount(true);
        let doc = await firebase
          .firestore()
          .collection('users')
          .doc(currentUserUID)
          .get();

        if (!doc.exists){
          Alert.alert('No user data found!')
        } else {
          let dataObj = doc.data();
          setFirstName(dataObj.firstName)

        }
        if (!doc.exists){
          Alert.alert('No user data found!')
        } else {
          let dataObj = doc.data();
          setLastName(dataObj.lastName)
        }
        if (!doc.exists){
          Alert.alert('No user data found!')
        } else {
          let dataObj = doc.data();
          setEmail(dataObj.email)
        }
      } catch (err){
      Alert.alert('Error:', err.message)
      }
    }
    getUserInformation();
    
  })
if(!didMount) {
  return null;
}


  return (

    <View style={styles.container}>    
        <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>
        <View style={[styles.header1]}>
        <FontAwesome 
                    name="user-circle-o"
                    color="#fff"
                    size={200}

                
                />
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}

        >             
         <Text style={styles.userNameText}>{firstName} {lastName} <FontAwesome 
                        name="pencil"
                        color="#05375a"
                        size={20}
                    
                    />
        </Text>
   
            <View style={styles.action}>
            </View>
            <Text style={styles.text_footer}>Email:</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="envelope-o"
                    color="#05375a"
                    size={20}
                
                />
                <Text style={styles.infoText}>  {email}  </Text>
                <FontAwesome 
                        name="pencil"
                        color="#05375a"
                        size={20}
                    
                    />
            </View>
            <View style={styles.action}>
                <FontAwesome 
                    name="phone"
                    color="#05375a"
                    size={20}
                
                />
                <Text style={styles.infoText}> Click the Pencil to Add Phone Number </Text>
                <FontAwesome 
                        name="pencil"
                        color="#05375a"
                        size={20}
                        onPress={() => navigation.navigate('MainScreen')}
                    
                    />
            </View>
            <View style={styles.action}>
                <FontAwesome 
                    name="home"
                    color="#05375a"
                    size={20}
                
                />
                <Text style={styles.infoText}> Click the Pencil to Add Billing Information </Text>
                <FontAwesome 
                        name="pencil"
                        color="#05375a"
                        size={20}
                        onPress={() => navigation.navigate('MainScreen')}
                    
                    />
                
            </View>
            <Text style={styles.text_footer}>Available Balance:</Text>
            <View style={styles.action}>
                <FontAwesome 
                        name="usd"
                        color="#05375a"
                        size={20}
                    
                    />
                <Text style={styles.infoText}> {formatter.format(total_balance)}</Text>
            </View>
           
            <TouchableOpacity
                    style={styles.Back}
                    onPress={() => navigation.navigate('MainScreen')}
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.Back}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Back to Main Screen</Text>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LoginScreen')}
                    style={[styles.Back, {
                        borderColor: '#7D2AE8',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#7D2AE8'
                    }]}>Log Out</Text>
                </TouchableOpacity>
            
        </Animatable.View>
        </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#6970E3'
  },
  header1: {
      flex: .5,
      paddingHorizontal: 50,
      alignItems:'center',
      marginTop:80,
      alignContent:'center',
      flexWrap:'wrap',
      
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',

  },
  header2: {
    flex: 0.45,
   // justifyContent: 'flex-end',
   flexDirection:'column',
    paddingBottom: 5,
    justifyContent: 'center',
},
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 35,
      paddingVertical: 40,
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      alignContent:'center',
      justifyContent: 'center',
      fontSize: 24
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
  button:{
    flex: 3.5,
    flexDirection:'row',
    flexWrap:'wrap',
    height:'100%',
  },
  icon_header:{
   // flex:1,
    //flexDirection:'row',
    //justifyContent:'space-between',
    //position: 'absolute',
    // marginLeft:10,
    // marginTop:50

  },
  b1: {
      width:0.36 * screenWidth,
      height:0.16 * screenHeight,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  blogout: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  text1: {
      fontSize: 16,
      fontWeight: 'bold'
  },
  userNameText: {
    color: '#6970E3',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
  headerColumn: {
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  infoText: {
    color: '#6970E3',
    fontSize: 18,
    paddingBottom: 8,
    textAlign: 'left',
  },
  info: {
    color: 'gray',
    fontSize: 18,
    paddingBottom: 8,
    textAlign: 'left',
  },
  Back: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
});


