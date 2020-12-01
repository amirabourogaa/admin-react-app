import firebase from "firebase/app";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyBulQv7J1MkHM5j6eXzrpJG_GxocPHc1rs",
  authDomain: "consulting-c826b.firebaseapp.com",
  databaseURL: "https://consulting-c826b.firebaseio.com",
  projectId: "consulting-c826b",
  storageBucket: "consulting-c826b.appspot.com",
  messagingSenderId: "1045823872006",
  appId: "1:1045823872006:web:a0519c5040c1f332c17787",
  measurementId: "G-MK8Y78XV8X",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//analytics is optional for this tutoral
firebase.analytics();
