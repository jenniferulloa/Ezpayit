import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ListItem, Divider} from "react-native-elements";

const LedgerBoxScreen = ({id,type,amount,total,difference,timestamp}) => {
  return (
    // <ListItem key={id} >
        <View style={difference === '+' ? styles.ledge:styles.ledge2}>
          <Text style={{fontSize:20,margin:10}}>{type}</Text>     
          <Text style={{fontSize:20,margin:10}}>{amount}</Text>
          <Text style={{fontSize:20,margin:10}}>{total}</Text> 
          <Text style={{fontSize:40,margin:10, color: difference === '+' ? 'green':'red'}}>{difference}</Text> 
        </View>     
    // {/* </ListItem> */}
  )
}

export default LedgerBoxScreen

const styles = StyleSheet.create({
  ledge:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#7DCEA0'
  },
  ledge2:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#CD6155'
  }
})
