import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCImKl9S_CgaurXyOXfzrE5BGtLtajW32M",
    authDomain: "crwn-db-e0cac.firebaseapp.com",
    projectId: "crwn-db-e0cac",
    storageBucket: "crwn-db-e0cac.appspot.com",
    messagingSenderId: "301318297342",
    appId: "1:301318297342:web:a93bd60f1dee5f9b5c37af",
    measurementId: "G-2GZK598TGQ"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth){
    return;
  } 

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
     } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
