import { database } from 'firebase';
import React,{useEffect, useState} from 'react';
import { 
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
    StatusBar,
    ScrollView
} from 'react-native';
import * as firebase from 'firebase';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { ScrollView } from 'react-native-gesture-handler';
import NotificationMessages from './NotificationMessages';
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeable from 'react-native-swipeable-row';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated from 'react-native-reanimated';

const NotificationScreen = ({navigation,route}) => {

  const db = firebase.firestore();
  const [messages,setMessages] = useState([]);

  useEffect( () => {
    const unsubscribe = db.collection("users").doc(route.params.id).collection("notifications").orderBy("timestamp","desc").onSnapshot(snapshot => (
      setMessages(snapshot.docs.map(doc => ({        
        id:doc.id,
        data:doc.data()        
      })))
    ));   
    return unsubscribe;
  },[])

    return (
      <View>
        <View style={styles.iconNotification}>
          <Icon name="notifications" color="#6970E3" size={26} />
          <Text style={{fontSize:30, textAlign:'center', margin:10}}>Notifications</Text>
        </View>
      <ScrollView style={styles.container}>
        {messages.map(({id,data:{subject,body,timestamp}})=>(
          //<TouchableOpacity key={id}>
          <View style={styles.messageBox} key={id}>
            <NotificationMessages  id={id} subject={subject} body={body} timestamp={timestamp.toDate()}/>
          </View>                 
         // </TouchableOpacity>          
        ))}
      </ScrollView>
      </View>

    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
      height:'90%',
      backgroundColor:'white',
    },
    messageBox:{
      borderWidth:1,
      marginBottom:2,
    },
    iconNotification:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }
});