import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";   //this is for the cloud firestore
import { getDatabase } from "firebase/database";    // this is for the realtime database
import dotenv from 'dotenv';

dotenv.config(); 

const firebaseConfig = {
  apiKey: "AIzaSyCjf4Il61JXZYqEVcdU9Rs2xEnC2z-txqA",
  authDomain: "tapdropdashboard.firebaseapp.com",
  projectId: "tapdropdashboard",
  storageBucket: "tapdropdashboard.appspot.com",
  messagingSenderId: "75892653275",
  appId: "1:75892653275:web:1662afc6b0d01edac3e0fe",
  measurementId: "G-L1F3FY9EV5"
};


// Initialize Firebase
//export let firebase_app = firebase.getApps().length === 0 ? firebase.initializeApp(firebaseConfig) : firebase.getApps()[0];
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const realtimeDatabase = getDatabase(app);
export {app,auth,db,realtimeDatabase}

