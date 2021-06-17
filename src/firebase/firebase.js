import firebase from "firebase/app";
import '@firebase/firestore'

const firebaseConfig =  ({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "tienda-marenda.firebaseapp.com",
    projectId: "tienda-marenda",
    storageBucket: "tienda-marenda.appspot.com",
    messagingSenderId: "346492043161",
    appId: "1:346492043161:web:e9dc2dda4aacdec24f1d08"
  });

  const app = firebase.initializeApp(firebaseConfig)
  
  export const getFirebase = () => app;
  export const getFireStore = () => firebase.firestore(app);
