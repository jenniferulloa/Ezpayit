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
import * as firebase from 'firebase';


const TransferMoneyScreen = ({navigation,route}) => {

  const [amount,setAmount] = useState('')
  const textInputChange = (value) => {
    setAmount(value)
    }
const db = firebase.firestore();

  const updateBalance = () => {
    route.params.balance += Number(amount)
    db.collection("users").doc(route.params.id).update({"accountBalance":route.params.balance})

    db.collection('users')
      .doc(route.params.id).collection('notifications')
      .add({
        subject:"Transfer confirmed.",
        body:`A transfer of $${Number(amount)} has been added to your balance.`,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      db.collection('users')
      .doc(route.params.id).collection('ledgers')
      .add({
        type: 'Withdraw',
        amount:`$${Number(amount)}`,
        total:`$${route.params.balance}`,
        difference:'+',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

    navigation.navigate('BottomTabScreen')
}

const alertSubmit = () => {
    Alert.alert(
    "Transfer complete",
    "Notification will be sent shortly",
    
    [
        
      { text: "OK", onPress: () => updateBalance() }]
)
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
            <Text style={styles.text_header}>Your Current Balance Is:</Text>
            <Text style={styles.text_header}>${route.params.balance}</Text>
   
            <VirtualKeyboard 
                color='purple' 

                pressMode='string'
                onPress={(val) => textInputChange(val)}
            /> 
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={alertSubmit}

                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.Login}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Withdraw!</Text>
                </LinearGradient>
                </TouchableOpacity>

            </View>
            </View>
        </Animatable.View>
      </View>
  )
}

export default TransferMoneyScreen

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
