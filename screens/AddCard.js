import React from 'react'
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
import {LinearGradient} from 'expo-linear-gradient';
import { CreditCardInput, LiteCreditCardInput } from "react-native-input-credit-card";

const alertSubmit = () => {
  Alert.alert(
  "Credit card added",
  "a new credit card has been added to your wallet.",
  [
    { text: "OK", onPress: () => navigation.navigate('MainScreen') }]
)

}

const AddCard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <CreditCardInput cardScale={1.25}/>
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
                      }]}>Add Card</Text>
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

export default AddCard

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
    margin:10,
  },
  card:{
    marginTop:50,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
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
})
