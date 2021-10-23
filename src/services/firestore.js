// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfOw4ZGp0RAsSdXqRkQf-8u6zBEeu6Vbc",
    authDomain: "iceland-e99ad.firebaseapp.com",
    projectId: "iceland-e99ad",
    storageBucket: "iceland-e99ad.appspot.com",
    messagingSenderId: "637707830443",
    appId: "1:637707830443:web:17c29724e9f871344d23ee",
};

firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const firestore = firebase.firestore();
// {exporting a firebase.firestore.Firstore object}
export default firestore;
