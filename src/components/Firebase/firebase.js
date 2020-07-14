import * as app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAK9FKaQjuGxy1wo7HxILAwn8qXKcMQ64Q",
  authDomain: "copy-clash.firebaseapp.com",
  databaseURL: "https://copy-clash.firebaseio.com",
  projectId: "copy-clash",
  storageBucket: "copy-clash.appspot.com",
  messagingSenderId: "714531605346",
  appId: "1:714531605346:web:eef7a9d1401e9ace267a3b",
  measurementId: "G-PX4B9EBNHS",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  // Auth API

  doCreateUserWithEmailAndPassword = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password);
  };

  doSignInWithEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  };

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) => {
    this.auth.currentUser.updatePassword(password);
  };
}

export default Firebase;
