import firebase from "firebase"
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDlAUSUeWUa-fG8xERbPNBilTCM-smpb3U",
    authDomain: "genco-pizza.firebaseapp.com",
    databaseURL: "https://genco-pizza.firebaseio.com",
    projectId: "genco-pizza",
    storageBucket: "genco-pizza.appspot.com",
    messagingSenderId: "754295222408",
    appId: "1:754295222408:web:2cd89bb9835362f223af3d",
    measurementId: "G-LQD4CPYBYN"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;