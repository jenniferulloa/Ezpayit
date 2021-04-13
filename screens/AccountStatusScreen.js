import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button, 
  TouchableOpacity, 
  Dimensions,
  TextInput,
  ScrollView,
  StatusBar
 } from 'react-native';

 import * as Animatable from 'react-native-animatable';
 import {LinearGradient} from 'expo-linear-gradient';
 import FontAwesome from 'react-native-vector-icons/FontAwesome';
 import Feather from 'react-native-vector-icons/Feather';
 
 //import WithdrawScreen from './screens/WithdrawScreen';
 import TransferScreen from './screens/TransferScreen';
 import AddMoneyScreen from './screens/AddMoney';
 import HistoryScreen from './screens/HistoryScreen';

 const AccountStatusScreen = ({navigation}) => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      var total_balance = 2999.99
  return (
    <View style={styles.container}>
          <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Account Status</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
    
    <Text style={styles.text_footer}>Available Balance: </Text>
<View style={styles.button}>
<TouchableOpacity
    style={styles.Button}
    onPress={() => navigation.navigate('WithdrawScreen')}
>
<LinearGradient
    colors={['#696FE2', '#7158B7']}
    style={styles.Button}
>
    <Text style={[styles.textSign, {
        color:'#fff'
    }]}>Withdraw</Text>
</LinearGradient>
</TouchableOpacity>

<TouchableOpacity
    style={styles.Button}
    onPress={() => navigation.navigate('TransferScreen')}
>
<LinearGradient
    colors={['#696FE2', '#7158B7']}
    style={styles.Button}
>
    <Text style={[styles.textSign, {
        color:'#fff'
    }]}>Transfer</Text>
</LinearGradient>
</TouchableOpacity>

<TouchableOpacity
    style={styles.Button}
    onPress={() => navigation.navigate('AddMoneyScreen')}
>
<LinearGradient
    colors={['#696FE2', '#7158B7']}
    style={styles.Button}
>
    <Text style={[styles.textSign, {
        color:'#fff'
    }]}>Add</Text>
</LinearGradient>
</TouchableOpacity>

<TouchableOpacity
    onPress={() => navigation.navigate('HistoryScreen')}
    style={[styles.Button, {
        borderColor: '#7D2AE8',
        borderWidth: 1,
        marginTop: 15
    }]}
>
    <Text style={[styles.textSign, {
        color: '#7D2AE8'
    }]}>Show History</Text>
</TouchableOpacity>
</View>
</Animatable.View>
</View>
  );
}

export default AccountStatusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 0.8,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
},
footer: {
    flex: 3.2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
},
text_header: {
    color: '05375a',
    fontWeight: 'bold',
    fontSize: 32
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
textInput: {
    flex: 1,
    marginTop: 0,
    paddingLeft: 10,
    fontSize: 16,
    color: '#05375a',
},
button: {
    alignItems: 'center',
    marginTop: 30
},
Button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
    fontSize: 18,
    fontWeight: 'bold'
},
textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
},
color_textPrivate: {
    fontSize: 15,
    color: '#7D2AE8'
}
});
