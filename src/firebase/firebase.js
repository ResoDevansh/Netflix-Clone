import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAy5WjPrivfQRDyIUQ6nPhEl2QcfW8AwcE",
  authDomain: "netflix-clone-cb332.firebaseapp.com",
  projectId: "netflix-clone-cb332",
  storageBucket: "netflix-clone-cb332.appspot.com",
  messagingSenderId: "524053857787",
  appId: "1:524053857787:web:31b2c974a9db7ba0ae775e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
