import *as firebase from 'firebase'
require('@firebase/firestore')




var firebaseConfig = {
    apiKey: "AIzaSyCHJEhX-pU2ssFrhGn5_e-7jd0YlwBiuYo",
    authDomain: "project-c71.firebaseapp.com",
    databaseURL: "https://project-c71.firebaseio.com",
    projectId: "project-c71",
    storageBucket: "project-c71.appspot.com",
    messagingSenderId: "1025015642550",
    appId: "1:1025015642550:web:d8952528972b19b7a8e917"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()