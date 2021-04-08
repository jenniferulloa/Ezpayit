import * as firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAZtPTmGOL3pjKdC3H3TuLKSFnLsuEZACE",
  authDomain: "ezpayit-7b235.firebaseapp.com",
  projectId: "ezpayit-7b235",
  storageBucket: "ezpayit-7b235.appspot.com",
  messagingSenderId: "198842830664",
  appId: "1:198842830664:web:cae0f1781a631fb70d2d7d"
};

let app;
// initialize app with firebase when creating new one
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig)
}else{
  app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};

export const createUserDocument = async(user, additionalData) => {
  if(!user) return;
  const userRef = firestore.doc(`users/${user.uid}`); 
  const snapshot = await userRef.get();

  if(!snapshot.exists)
  {
    const {email} = user;
    const {displayName} = additionalData;

    try {
      userRef.set({
        displayName,
        email,
        createdAt: new Date()
      })
    }catch(error)
    {
      console.log('Error in creating user doc in firestore')
    }
  }
};