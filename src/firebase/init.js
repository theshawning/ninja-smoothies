import * as firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBAC9gsev5-HkhXtNkOK9nMWVaPS8nRQKE",
  authDomain: "ninjasmoothie-eccbb.firebaseapp.com",
  databaseURL: "https://ninjasmoothie-eccbb.firebaseio.com",
  projectId: "ninjasmoothie-eccbb",
  storageBucket: "ninjasmoothie-eccbb.appspot.com",
  messagingSenderId: "984911506643",
  appId: "1:984911506643:web:fdd48abf18900b0311f826"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
