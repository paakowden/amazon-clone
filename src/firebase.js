import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBl20umZ8j8sOYz9vwVPP5S00m1O0vwt74",
  authDomain: "clone-5622d.firebaseapp.com",
  databaseURL: "https://clone-5622d.firebaseio.com",
  projectId: "clone-5622d",
  storageBucket: "clone-5622d.appspot.com",
  messagingSenderId: "851387890010",
  appId: "1:851387890010:web:3879fab4f766926a0f1b63",
  measurementId: "G-EK18FNGFGV",
});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
