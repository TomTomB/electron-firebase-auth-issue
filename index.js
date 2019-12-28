import * as firebase from "firebase/app";
import "firebase/auth";

// TODO: Fill in your firebase project credentials here
const app = firebase.initializeApp({
  apiKey: "AIzaSyCPSkCCY6puRMIkVCB1mSIsGIyeIlqXaZM",
  authDomain: "set-go.de",
  databaseURL: "https://set-go-backend.firebaseio.com",
  projectId: "set-go-backend",
  storageBucket: "set-go-backend.appspot.com",
  messagingSenderId: "651274672460",
  appId: "1:651274672460:web:7753aef5183ce096"
});

document.getElementById("loginBtn").addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  app.auth().signInWithPopup(provider);
});
