import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCoMonk6SxzDpqLzM1VAWs6zeXA9Vp1ISs",
    authDomain: "unichat-91a68.firebaseapp.com",
    projectId: "unichat-91a68",
    storageBucket: "unichat-91a68.appspot.com",
    messagingSenderId: "1047859584168",
    appId: "1:1047859584168:web:904a5f11f4ba464f82b69d",
}).auth();