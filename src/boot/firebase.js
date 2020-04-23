// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA1hY8bPVFdFfU06F6s5TTra_pwzAMyP34",
    authDomain: "pos-store-a0c7d.firebaseapp.com",
    databaseURL: "https://pos-store-a0c7d.firebaseio.com",
    projectId: "pos-store-a0c7d",
    storageBucket: "pos-store-a0c7d.appspot.com",
    messagingSenderId: "845929116047",
    appId: "1:845929116047:web:95a8e176d229617bd41bfa"
  };
  // Initialize Firebase
 let firebaseApp = firebase.initializeApp(firebaseConfig);
 let firebaseAuth = firebaseApp.auth()
 let firebaseDb = firebaseApp.database()

 export { firebaseAuth, firebaseDb }