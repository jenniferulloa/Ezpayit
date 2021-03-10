import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import {Button,Input,Avatar} from "react-native-elements";
import {LinearGradient} from 'expo-linear-gradient';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


const mainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={['#696FE2', '#7000dc']}
        style={styles.background}>
      </LinearGradient>
      <View style={styles.header}>
        <View style={styles.icon_header}>
          {/* 3 bar menu drop down */}
          <Entypo name='menu' color='white' size={30}/>
          {/* ezpayit name */}
          {/* <Text style={{fontSize:20}}>EzWallet</Text> */}

          <View style={styles.right_header}>
            {/* notification bell icon */}
            <Ionicons name='notifications-outline' color='white' size={30}/>
            {/* setting icon */}
            <Ionicons name='settings-outline' color='white' size={30}/>
          </View>

        </View>
        
        <View style={styles.balance_header}>
          <Avatar rounded icon={{name: 'user-circle', type: 'font-awesome'}} size={100}/>
          <Text style={{fontSize:20,color:'white',}}>Wallet Balance</Text>
          <Text style={{fontSize:45,color:'white',}}>$300.76</Text>
          {/* <Text >Crypto Balance: $206.32</Text> */}
        </View>
        
      </View>
    
      <View style={styles.button}>
        <Button type='outline' buttonStyle={styles.buttons} icon={<Material name='bank-transfer' color='#4e0098' size={50}/>} title='Transfer'/>
        <Button type='outline' buttonStyle={styles.buttons} icon={<FontAwesome name='money' color='#4e0098' size={50}/>} title='Add Money'/>
        <Button type='outline' buttonStyle={styles.buttons} icon={<Entypo name='shop' color='#4e0098' size={50}/>} title='E-Shopping'/>
        <Button type='outline' buttonStyle={styles.buttons} icon={<Entypo name='credit-card' color='#4e0098' size={50}/>} title='Add Card'/>
        <Button type='outline' buttonStyle={styles.buttons} icon={<Entypo name='wallet' color='#4e0098' size={50}/>} title='Modify Wallet'/>
        <Button type='outline' buttonStyle={styles.buttons} icon={<Material name='account-box-outline' color='#4e0098' size={50}/>} title='Account Status'/>
      </View>

      {/* <Button type='outline' buttonStyle={{margin:40}} onPress={() => navigation.navigate('LoginScreen')} title='Log out'/> */}
    </View>
  )
}

export default mainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white',
    // padding: 10,
  },
  header:{
    flex:.25,
    width:'100%',
    padding:10,
    flexDirection:'column',
    justifyContent:'space-between',
    borderBottomWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
  },
  icon_header:{
    // flex:1,
    flexDirection:'row',
    justifyContent:'space-between'

  },
  right_header:{
    flexDirection:'row',
    
  },
  balance_header:{
    // flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  button:{
    flex: .75,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    // alignContent:'center',
    // height:'100%',
    // borderWidth: 1,
    // borderRadius: 20,
    // borderColor: '#696FE2',
  },
  buttons:{
    // flex: 1,
    flexDirection:'column',
    // flexWrap:'wrap',
    // justifyContent: 'center',
    // alignContent:'center',
    // textAlign:'center',
    width:160,
    height:100,
    color:'white',
    backgroundColor:'white',
    borderColor: '#696FE2',
    borderRadius: 5,
    // padding:10,
    margin: 10,
    
  },
  background:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  }
})
