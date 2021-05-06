import React, { useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image, Alert } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

const ProductScreen = ({navigation,route}) => {
  // console.log('items:',route.params.items.product_price);
  const [counter,setCounter] = useState(0);
  let [balance,setBalance] = useState(0);
  let currentUserUID = firebase.auth().currentUser.uid;
  const db = firebase.firestore();
  db.collection("users").doc(currentUserUID).get().then((doc)=>{
    setBalance(doc.data().accountBalance)
  });
  // ------update passing user id from mainscreen------------
  const updatePurchase = () => {
    // take $ out of route.params.items.product_price
    const price = route.params.items.product_price.replace('$','')
    // multiply price by counter
    const amount = counter * price;
    console.log('amount',amount,balance,Number(amount))
    balance -= Number(amount)
    db.collection("users").doc(currentUserUID).update({"accountBalance":balance})

    db.collection('users')
      .doc(currentUserUID).collection('notifications')
      .add({
        subject:"Purchase confirmed.",
        body:`A purchase of $${Number(amount)} for ${route.params.items.product_title} has been accepted by the seller.`,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      db.collection('users')
      .doc(currentUserUID).collection('ledgers')
      .add({
        type: 'Purchase',
        amount:`$${Number(amount)}`,
        total:`$${balance}`,
        difference:'--',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

    navigation.navigate('SearchScreen')
}

  const alertSubmit = () => {
    Alert.alert(
    "Order submitted to seller",
    "Your order has been sent. The sender will send you notification when your order is accepted.",
    [
      { text: "OK", onPress: () => updatePurchase() }
    ]
  )
  }

  return (
      <View style={styles.item}>
        
                
        <View style={styles.images}>
          <Image style={styles.imgs} source={{uri:route.params.items.product_image}}/>
        </View>

        <View style={styles.description}>
          <Text style={{fontSize:30, margin:5}}>{route.params.items.product_title}</Text>
          <ScrollView>
            <Text style={{fontSize:15,margin:5}}>{route.params.items.product_description}</Text>
          </ScrollView>
          
          <Text style={{fontSize:30,margin:5}}>{route.params.items.product_price}</Text>
          {/* <Text style={{fontSize:25}}>Product Page</Text> */}
        </View>

        <View style={styles.counter}>
          <TouchableOpacity onPress = {() => setCounter(counter - 1)}>
            <Text style={{fontSize:60,marginRight:30}}>-</Text>
          </TouchableOpacity>

          <Text style={{fontSize:50}}>{counter}</Text>

          <TouchableOpacity onPress = {() => setCounter(counter + 1)}>
            <Text style={{fontSize:40, marginLeft:30}}>+</Text>
          </TouchableOpacity>
        </View>

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
                      }]}>Purchase from seller</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.Login, {
                        borderColor: '#7D2AE8',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#7D2AE8'
                    }]}>back</Text>
                </TouchableOpacity>
      </View>

    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  item: {
    padding: 10,
    // margin:5,
    // flexDirection: 'column',
    flex:1,
    backgroundColor:'white',
    flexDirection:'column',
    // justifyContent:'center',
    // alignItems:'center',
    // borderWidth:1,
    // borderColor:'gray',
    // borderRadius:5,
  },
  imgs: {
    width:200,
    height:200
  },
  description:{
    // flex:.5,
    // textAlign:'right'
    borderBottomWidth:2,
    borderTopWidth:2,
    borderColor:'gray',
    // borderRadius:5,
  },
  images:{
    // flex:.5
    alignItems:'center',
  },
  button: {
    alignItems: 'center',
    marginTop: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  Login: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  counter:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
})
