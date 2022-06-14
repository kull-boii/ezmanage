import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRim-0vHx_m4FexzqmbpMIu3AEpTz9eKk",
  authDomain: "ezmanage-c9ee0.firebaseapp.com",
  projectId: "ezmanage-c9ee0",
  storageBucket: "ezmanage-c9ee0.appspot.com",
  messagingSenderId: "393793954193",
  appId: "1:393793954193:web:6515103c00ec863e02ba30",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
