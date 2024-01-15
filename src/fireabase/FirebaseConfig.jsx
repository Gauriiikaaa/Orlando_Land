// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf0QGxi5ihmkm0y0G816esdCLLA-7acHc",
  authDomain: "gaurika9403.firebaseapp.com",
  projectId: "gaurika9403",
  storageBucket: "gaurika9403.appspot.com",
  messagingSenderId: "190572509080",
  appId: "1:190572509080:web:a6a1eb7d381e959c35dded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}