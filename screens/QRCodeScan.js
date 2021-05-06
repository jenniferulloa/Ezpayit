
import React, { useState, useEffect } from 'react';
import { 
    Text,
    View, 
    StyleSheet,
    Button, 
    Image,
    Alert,
    TouchableOpacity
         } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {icons} from "../constants";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';
import * as firebase from 'firebase';
import { useIsFocused } from "@react-navigation/native";

const QRCodeScan = ({ navigation ,route}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const isFocused = useIsFocused();
  
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(
        "User Found: John",
        `Barcode type ${type} and data ${data} has been scanned!`,
        [
          {
            text: "Send Money",
            onPress: () => navigation.navigate('TransferScreen2')
          },
          {
            text: "Cancel",
            onPress: () => setScanned(false),
            style: "cancel"
          }
        ]
      )
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  function renderScanFocus() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Image
                source={require('../assets/focus.png')}
                resizeMode="stretch"
                style={{
                    marginTop: "-45%",
                    width: 200,
                    height: 300
                }}
            />
        </View>
    )
}



function renderPaymentMethods() {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 200,
                padding: 15,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                backgroundColor: '#fff'
            }}
        >

<View style={{ flexDirection: 'row',justifyContent: 'center', padding: 10}}>     

<TouchableOpacity
        style={styles.Login}
        onPress={() => setScanned(false)}
    >
    <LinearGradient
        colors={['#696FE2', '#7158B7']}
        style={styles.Login}
    >
        <Text style={[styles.textSign, {
            color:'#fff'
        }]}>Scan </Text>
        <FontAwesome 
     
     name="refresh"
     color="#fff"
     size={20}
 />
    </LinearGradient>
    </TouchableOpacity>

</View>
            <Text style={{ color: '#000',fontSize:20,fontWeight:'bold',marginTop:10}} >Another payment method</Text>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginTop: 20
                }}
            >

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 20
                    }}
                  //  onPress={() => navigation.navigate('......')}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#E6FEF0',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}
                    >
                <FontAwesome 
                    name="envelope-o"
                    color="#05375a"
                    size={20}
                />
                    </View>
                    <Text style={{fontSize:16,marginLeft:10}}>Via Email</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
       <View style={{ flexDirection: 'row', marginTop: 50}}>
            <TouchableOpacity
                style={{
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={icons.close}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: '#fff'
                    }}
                />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#fff',fontSize:18, fontWeight:'bold'}}>Scan for Payment</Text>
            </View>

            <TouchableOpacity
                style={{
                    height: 45,
                    width: 45,
                    backgroundColor: '#7158B7',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
               // onPress={() => console.log("Info")}
            >
                <Image
                    source={icons.info}
                    style={{
                        height: 25,
                        width: 25,
                        tintColor: '#fff'
                    }}
                />
            </TouchableOpacity>
        </View>
        {renderScanFocus()}
        {renderPaymentMethods()}
    </View>
  );
}
export default QRCodeScan;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  Login: {
      flexDirection: 'row',
      width: '50%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});
