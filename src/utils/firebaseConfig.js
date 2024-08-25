// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr6DCXvOgzxorn8y0ix5hCIDbtXgIxo1I",
  authDomain: "giphy-f428d.firebaseapp.com",
  projectId: "giphy-f428d",
  storageBucket: "giphy-f428d.appspot.com",
  messagingSenderId: "1071723231066",
  appId: "1:1071723231066:web:68804b239ad8d717846563",
  measurementId: "G-C3DT8CXTZF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
