import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,} from 'react-native'
import {ListItem, Divider} from "react-native-elements";
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as firebase from 'firebase';

const NotificationMessages = ({id,subject,body,timestamp}) => {
  const db = firebase.firestore();
  let currentUserUID = firebase.auth().currentUser.uid;
  return (
    <ListItem key={id}>
      <View style={styles.messageBox}>
        <View style={styles.subjects}>
          <Text style={{fontSize:20}}>{subject}</Text>
          <TouchableOpacity onPress={() => db.collection("users").doc(currentUserUID).collection("notifications").doc(id).delete()}>
            <AntDesign name='delete' color='red' size={20}/>
          </TouchableOpacity>
          {/* <Text>{timestamp}</Text> */}
        </View>
        
        <Divider style={{ backgroundColor: 'gray' }} />
        <Text style={{fontSize:15,marginTop:3}}>{body}</Text>
        
      </View>
      
    </ListItem>
    
  )
}

export default NotificationMessages

const styles = StyleSheet.create({
  messageBox:{
    flex:1,
    flexDirection:'column',
  },
  subjects:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
})
