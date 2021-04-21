import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDLzCxgQ15QNaRGodqokm3dynRZsVt4V2k",
    authDomain: "clone-1cddd.firebaseapp.com",
    projectId: "clone-1cddd",
    storageBucket: "clone-1cddd.appspot.com",
    messagingSenderId: "94555274609",
    appId: "1:94555274609:web:e72b2d97930a3c9948cad0"
};
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};