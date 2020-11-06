import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlAUSUeWUa-fG8xERbPNBilTCM-smpb3U",
  authDomain: "genco-pizza.firebaseapp.com",
  databaseURL: "https://genco-pizza.firebaseio.com",
  projectId: "genco-pizza",
  storageBucket: "genco-pizza.appspot.com",
  messagingSenderId: "754295222408",
  appId: "1:754295222408:web:2cd89bb9835362f223af3d",
  measurementId: "G-LQD4CPYBYN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
// const provider2 = firebase
//   .auth()
//   .setPersistence(firebase.auth.Auth.Persistence.SESSION)
//   .then(function () {
//     return new firebase.auth().GoogleAuthProvider();
//   })
//   .catch(function (error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });

export { db, auth, storage, provider };
