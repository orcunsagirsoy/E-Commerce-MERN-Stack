import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCazWK1DoSBv1DvKP38VC1NtSJrRG8JFcI",
    authDomain: "mern-e-commerce-86e7f.firebaseapp.com",
    projectId: "mern-e-commerce-86e7f",
    storageBucket: "mern-e-commerce-86e7f.appspot.com",
    messagingSenderId: "27003580705",
    appId: "1:27003580705:web:74fb9f04c3cc164bd84e60",
    measurementId: "G-B171ECT40G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();