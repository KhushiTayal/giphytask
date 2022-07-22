 //import firebase from 'firebase';
//  import * as firebase from "firebase/app";

import firebase from 'firebase/compat/app';
import "firebase/auth";
 import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage"
 import React, { useEffect} from 'react';
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyD8fC8uUzmg-mcJV-jZmGzGaP_iBnHxMUA",
   authDomain: "giphytask.firebaseapp.com",
   projectId: "giphytask",
   storageBucket: "giphytask.appspot.com",
   messagingSenderId: "685051586529",
   appId: "1:685051586529:web:0228176dc8681fdfefd4a0",
   measurementId: "G-3J62CC7D3F"
 };

 // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//  useEffect(() => {
//   initializeApp(firebaseConfig);
//  }, []);
export default app;
 export const auth = firebase.auth( );
export const db = firebase.firestore();
export const storage = firebase.storage();