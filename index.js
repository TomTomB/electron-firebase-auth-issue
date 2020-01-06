import * as firebase from "firebase/app";
import "firebase/auth";

// TODO: Fill in your firebase project credentials here
const app = firebase.initializeApp({
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
});

document.getElementById("loginBtn").addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  app.auth().signInWithPopup(provider);
});
