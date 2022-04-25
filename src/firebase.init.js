// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoHO6v_CA0XEmJr2q5kck9sZW1Oh2mev0",
    authDomain: "ema-john-simple-61fcd.firebaseapp.com",
    projectId: "ema-john-simple-61fcd",
    storageBucket: "ema-john-simple-61fcd.appspot.com",
    messagingSenderId: "970949322773",
    appId: "1:970949322773:web:d84ee1ebf1555b55ff861c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;