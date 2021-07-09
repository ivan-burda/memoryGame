//Firebase
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyCIGd3HFXbbxk7Purbys3w0RwP5y9J0p14",
  authDomain: "memorygame-ea24f.firebaseapp.com",
  databaseURL: "https://memorygame-ea24f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "memorygame-ea24f",
  storageBucket: "memorygame-ea24f.appspot.com",
  messagingSenderId: "204449371197",
  appId: "1:204449371197:web:482247ea16dc605c948654",
  measurementId: "G-7832FZSW4Q",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
