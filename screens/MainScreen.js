import React, {useEffect, useState} from 'react'
import { 
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import {Button,Input} from "react-native-elements";
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Avatar,Badge} from "react-native-elements";
import * as firebase from 'firebase';
import {logOut} from '../config/firebaseMethods';
import SplashScreen from '../screens/SplashScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Slick from "react-native-slick";
import {Alert} from 'react-native';
import { useIsFocused } from "@react-navigation/native";


import {screenHeight, screenWidth} from '../config/dimension';



const MainScreen = ({navigation}) => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const isFocused = useIsFocused();

  const[badgeCount, setBadgeCount] = useState(0);

  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');
  const [accountBalance, setAccountBalance] = useState(0);
  const [cryptoBalance, setCryptoBalance] = useState(0);
  const [updateBalance, setUpdateBalance] = useState(false);
  const [didMount, setDidMount] = useState(false); 
  const db = firebase.firestore();

  useEffect(()=>{
    db.collection("users").doc(currentUserUID).get().then((doc)=>{
      // console.log('data: ',doc.data())
      setAccountBalance(doc.data().accountBalance)
    });
    // console.log('account balance:',accountBalance)
  },[accountBalance, isFocused]);

  useEffect(()=>{
    db.collection("users").doc(currentUserUID).collection("notifications").get()
    .then(snapshot =>{
      size = snapshot.size
      // console.log('size', size)
      setBadgeCount(size)
    })
    .catch(err => {
      console.log('Error', err);
    });
    // console.log('badge count:',badgeCount)
  },[badgeCount, isFocused]);

  useEffect(() => {
    async function getUserInfo(){
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
          setCryptoBalance(dataObj.cryptoBalance)
        }
      } catch (err){
      Alert.alert('Error:', err.message)
      }
    }
    getUserInfo();
    
  },[])
if(!didMount) {
  return null;
}

  const handlePress = () => {
    logOut();
    navigation.replace('SplashScreen');
  };

  return (

    <View style={styles.container}>    
        <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>
        <View style={[styles.header1]}>
          <TouchableOpacity
          // onPress={() => navigation.openDrawer()}
          >
            {/* 3 bar menu drop down */}
            <Entypo name='menu' color='white' size={30}/>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationScreen',{id:currentUserUID})}
              >
              <View style={styles.badgeBell}>
                <Icon name="notifications" color="#fff" size={26} />
                <Badge value={badgeCount} status='error' containerStyle={styles.badge}/>
              </View>
            
          </TouchableOpacity>
        </View>

        <View style={[styles.header2]}>
          <Text style={{fontSize:30, color:'#ffffff',textAlign: 'center'}}>{firstName}</Text>
          <Slick style={styles.slick} showsButtons={true} loop={true} 
                buttonWrapperStyle={{flex:1,flexDirection:'row',alignItems: 'center',paddingBottom:50}} showsPagination={false} 
                nextButton={<Text style={styles.buttonText}>›</Text>} 
                prevButton={<Text style={styles.buttonText}>‹</Text>}>
          <View>
            <Text style={{fontSize:40,fontWeight: 'bold', color:'#ffffff',textAlign: 'center'}}>{formatter.format(accountBalance)}</Text>
            <Text style={{fontSize:16,color:'#F8F9FA',alignItems: 'center',textAlign: 'center'}}> Available Balance</Text>
          </View>

          <View>
            <Text style={{fontSize:40,fontWeight: 'bold', color:'#ffffff',textAlign: 'center'}}>{formatter.format(cryptoBalance)}</Text>
            <Text style={{fontSize:16,color:'#F8F9FA',alignItems: 'center',textAlign: 'center'}}> Crypto Balance</Text>
          </View>    
          </Slick>       
        </View>



        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
        <View style={styles.button}>
        <TouchableOpacity
          style={styles.b1}
          onPress={() => navigation.navigate('TransferScreen',{balance:accountBalance, id:currentUserUID})}>
          <LinearGradient
              colors={['#696FE2', '#7158B7']}
              style={styles.b1}
          >
                <Material name='bank-transfer' color='#ffffff' size={50}/>
                    <Text style={[styles.text1, {
                        color:'#fff'
                    }]}>Money Transfer</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
                    style={styles.b1}
                    onPress={() => navigation.navigate('AddMoneyScreen',{balance:accountBalance, id:currentUserUID})}
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.b1}
                >
                <FontAwesome name='money' color='#ffffff' size={50}/>
                    <Text style={[styles.text1, {
                        color:'#fff'
                    }]}>Add Money</Text>
                </LinearGradient>
                </TouchableOpacity>
        <TouchableOpacity
                    style={styles.b1}
                    onPress={() => navigation.navigate('SearchScreen')} //update by passing in user id to search screen
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.b1}
                >
                <Entypo name='shop' color='#ffffff' size={50}/>
                    <Text style={[styles.text1, {
                        color:'#fff'
                    }]}>E-Shopping</Text>
                </LinearGradient>
                </TouchableOpacity>
        <TouchableOpacity
                    style={styles.b1}
                   onPress={() => navigation.navigate('AddCardScreen')}
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.b1}
                >
                <Entypo name='credit-card' color='#ffffff' size={50}/>
                    <Text style={[styles.text1, {
                        color:'#fff'
                    }]}>Add Card</Text>
                </LinearGradient>
                </TouchableOpacity>
        <TouchableOpacity
                    style={styles.b1}
                //   onPress={() => navigation.navigate('')}
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.b1}
                >
                <Entypo name='wallet' color='#ffffff' size={50}/>
                    <Text style={[styles.text1, {
                        color:'#fff'
                    }]}> Modify Wallet</Text>
                </LinearGradient>
                </TouchableOpacity>

        <TouchableOpacity
                    style={styles.b1}
                    onPress={() => navigation.navigate('LedgerScreen')}
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.b1}
                >
                <AntDesign name='book' color='#ffffff' size={50}/>
                    <Text style={[styles.text1, {
                        color:'#fff'
                    }]}>Ledger</Text>
                </LinearGradient>
        </TouchableOpacity>
      </View>

        </Animatable.View>
        </View>
  
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#6970E3'
  },
  buttonText:{
    color:'white',
    fontSize:30,
    padding:40,
    marginBottom:20
    
  },
  badgeBell:{
    flexDirection:'row'
  },
  badge:{
    position: 'absolute',
    top: -5,
    right: -5,
  },
  slick:{
    justifyContent:'center',

  },
  header1: {
      flex: 0.15,
      flexDirection:'row',
      paddingHorizontal: 30,
      paddingBottom: 2,
      marginTop:50,
      justifyContent:'space-between',
    //   alignContent:'center',
      alignItems:'center'
      
  },
  header2: {
    flex: 0.45,
   // justifyContent: 'flex-end',
   flexDirection:'column',
    paddingBottom: 5,
    justifyContent: 'center',
},
  footer: {
      flex: 2,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 35,
      paddingVertical: 40
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
      width:0.35 * screenWidth,
      height:0.15 * screenHeight,
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
  }
});
