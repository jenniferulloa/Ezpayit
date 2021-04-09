import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import RegisterScreen from './RegisterScreen';

export default function LoadingScreen({ navigation }) {
  useEffect( () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          navigation.replace('MainScreen');
        } else {
          navigation.goBack('RegisterScreen');
        }
      });
    },[]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color="#0000ff"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});