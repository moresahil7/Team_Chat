import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4V7-Qjro5vKENZP288_hEOTTHjiPzI2c",
  authDomain: "slack-clone-b0fa1.firebaseapp.com",
  projectId: "slack-clone-b0fa1",
  storageBucket: "slack-clone-b0fa1.appspot.com",
  messagingSenderId: "375547647359",
  appId: "1:375547647359:web:11af8c3701d3c2966c364a"
};


const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};