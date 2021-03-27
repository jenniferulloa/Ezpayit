import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4XX5G84X-2VWq0YxzxWiyv-jp5Xqaqs8",
    authDomain: "ezpayit-5388a.firebaseapp.com",
    databaseURL: "https://ezpayit-5388a-default-rtdb.firebaseio.com",
    projectId: "ezpayit-5388a",
    storageBucket: "ezpayit-5388a.appspot.com",
    messagingSenderId: "263624570546",
    appId: "1:263624570546:web:c886ba31d0fb197481bbab",
    measurementId: "G-ME6YBVM0VX"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();