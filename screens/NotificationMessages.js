import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import {ListItem, Divider} from "react-native-elements";

const NotificationMessages = ({id,subject,body,timestamp}) => {
  return (
    <ListItem key={id}>
      <View style={styles.messageBox}>
        <View style={styles.subjects}>
          <Text style={{fontSize:20}}>{subject}</Text>
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
