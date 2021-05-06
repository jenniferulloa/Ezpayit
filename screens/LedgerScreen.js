import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,
// ScrollView
 } from 'react-native'
import LedgerBoxScreen from './LedgerBoxScreen';
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LedgerScreen = () => {
  const db = firebase.firestore();
  let currentUserUID = firebase.auth().currentUser.uid;
  const [ledges,setLedges] = useState([]);
  
  useEffect( () => {
    const unsubscribe = db.collection("users").doc(currentUserUID).collection("ledgers").orderBy("timestamp","desc").onSnapshot(snapshot => (
      setLedges(snapshot.docs.map(doc => ({
        id:doc.id,
        data:doc.data()
        
      })))
    ));
    return unsubscribe;
  },[])

  return (
    <View>
    <View style={styles.iconNotification}>
          <AntDesign name='book' color='#1CBD36' size={30}/>
          <Text style={{fontSize:30, textAlign:'center', margin:10}}>Ledger</Text>
    </View>
    <View style={styles.ledge}>
          <Text style={{fontSize:20}}>Type</Text>     
          <Text style={{fontSize:20}}>Amount</Text>
          <Text style={{fontSize:20}}>Total</Text> 
          <Text style={{fontSize:30}}>+/-</Text> 
    </View> 

    <ScrollView style={styles.container}>
        {/* <StatusBar backgroundColor='#6970E3' barStyle="light-content"/> */}
        
        {ledges.map(({id,data:{type,amount,total,difference,timestamp}})=>(
          <TouchableOpacity key={id} >
          <View style={styles.messageBox}>
            <LedgerBoxScreen  id={id} type={type} amount={amount} total={total} difference={difference} timestamp={timestamp.toDate()} />
          </View>       
          </TouchableOpacity>          
        ))}

      </ScrollView>
    </View>
  )
}

export default LedgerScreen

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor:'white',
  },
  messageBox:{
    borderWidth:1,
    marginBottom:2,
    // backgroundColor:'green'
  },
  iconNotification:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  ledge:{
    // flex:1,
    marginLeft:10,
    marginRight:10,
    flexDirection:'row',
    justifyContent:'space-between'
    // style={{backgroundColor:'green'}}
  }
})
