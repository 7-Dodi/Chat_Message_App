import firabase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Initialize Firebase
const app = firabase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firabase.auth.GoogleAuthProvider();

export { db, auth, provider };