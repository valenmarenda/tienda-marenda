import firebase from "firebase/app";
import '@firebase/firestore'

const app = firebase.initializeAppvar ({
    apiKey: "AIzaSyClXnZgQHNBjfw33Z2rwxMkAiVDs9EVBRI",
    authDomain: "tienda-marenda.firebaseapp.com",
    projectId: "tienda-marenda",
    storageBucket: "tienda-marenda.appspot.com",
    messagingSenderId: "346492043161",
    appId: "1:346492043161:web:e9dc2dda4aacdec24f1d08"
  });

  export function getFirebase(){
      return app;
  }
  export function getFirestore(){
      return firebase.firestore(app);
  }
