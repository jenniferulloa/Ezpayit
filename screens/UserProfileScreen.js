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
import { ScrollView } from 'react-native-gesture-handler';
// import DialogInput from 'react-native-dialog-input';
import {screenHeight, screenWidth} from '../config/dimension';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';



const UserProfileScreen = ({navigation}) => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  var total_balance = 2999.99;

  const db = firebase.firestore();
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);
  const [billingAddress,setBillingAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState(0);

  const [didMount, setDidMount] = useState(false); 

  useEffect(()=>{
    db.collection("users").doc(currentUserUID).get().then((doc)=>{
      setFirstName(doc.data().firstName)
      setLastName(doc.data().lastName)
      setEmail(doc.data().email)
      setAccountBalance(doc.data().accountBalance)
    });
  },[]);

const handlePress = () => {
  logOut();
  navigation.replace('SplashScreen');
};

  return (

    <View style={styles.container}>    
        <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>
        <View style={[styles.header1]}>
        <FontAwesome 
                    name="user-circle-o"
                    color="#fff"
                    size={100}

                
                />
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}

        > 
        <ScrollView>            
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

            </View>
            <View style={styles.action}>
                <FontAwesome 
                    name="phone"
                    color="#05375a"
                    size={20}
                
                />
                <Text style={styles.infoText}> Add Phone Number </Text>
                <FontAwesome 
                        name="pencil"
                        color="#05375a"
                        size={20}
                    
                    
                    />
            </View>
            <View style={styles.action}>
                <FontAwesome 
                    name="home"
                    color="#05375a"
                    size={20}
                
                />
                <Text style={styles.infoText}> Add Billing Information </Text>
                <FontAwesome 
                        name="pencil"
                        color="#05375a"
                        size={20}
                       // onPress={() => navigation.navigate('....')}
                    
                    />
                
            </View>

                </ScrollView> 
                <TouchableOpacity
                    style={styles.Back}
                    onPress= {handlePress}
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.Back}
                >
                   <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Log Out </Text>
                     <Icon 
                        name="exit-to-app" 
                        color= '#fff'
                        size={30}
                        />
                </LinearGradient>
                </TouchableOpacity> 
        </Animatable.View>
        </View>
  );
};

export default UserProfileScreen;

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


