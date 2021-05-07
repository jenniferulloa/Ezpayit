import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import RegisterScreen from './RegisterScreen';

export default function LoadingScreen({ navigation }) {
  useEffect( () => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        <ActivityIndicator size='large' />
        if (user) {
          navigation.replace('BottomTabScreen');
        } //else {
          //navigation.goBack();
        //}
      });
      return unsubscribe;
    },[]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#6970E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});