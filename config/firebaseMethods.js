import * as firebase from 'firebase';
import 'firebase/firestore';
import {Alert} from 'react-native';

export async function registration(email, password, lastName, firstName, created_at) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection('users')
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
        created_at:created_at,
        accountBalance:1000.00,
        cryptoBalance:20000.00
      });
  } catch (err) {
    Alert.alert('Error:', err.message);
  }
}

export async function logIn(email, password) {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert('Error:', err.message);
  }
}

export async function logOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('Error:', err.message);
  }
}
