import { getAuth } from "firebase/auth";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAGlzPyCzjc5WiwUhdFVgVFtmCBG5403rc",
    authDomain: "dummy-project-first-1.firebaseapp.com",
    projectId: "dummy-project-first-1",
    storageBucket: "dummy-project-first-1.appspot.com",
    messagingSenderId: "676510545925",
    appId: "1:676510545925:web:662804546a9759b417046c",
    measurementId: "G-9JXCHCPCE1"
  };
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth();
  export default app;