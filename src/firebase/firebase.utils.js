import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCUJycCeexnyLs6EBf9zqZHpftlwNZRuBc",
    authDomain: "nshop-c0e41.firebaseapp.com",
    databaseURL: "https://nshop-c0e41.firebaseio.com",
    projectId: "nshop-c0e41",
    storageBucket: "nshop-c0e41.appspot.com",
    messagingSenderId: "1096789832467",
    appId: "1:1096789832467:web:2844bd69645276fb87a0e6",
    measurementId: "G-6K29CDCXDN"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;