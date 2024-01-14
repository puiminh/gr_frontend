import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAg_0Pvk3zIP9AaYGxID5VpJFN04gFdyIQ",
    authDomain: "recipe-58dab.firebaseapp.com",
    projectId: "recipe-58dab",
    storageBucket: "recipe-58dab.appspot.com",
    messagingSenderId: "396487241691",
    appId: "1:396487241691:web:4f2703f5bbceda248d41fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export default storage;