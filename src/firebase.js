import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3abpe41zcRdlo8aSPpIXybDaO2XhjDKY",
  authDomain: "facebookclone-97623.firebaseapp.com",
  databaseURL: "https://facebookclone-97623-default-rtdb.firebaseio.com",
  projectId: "facebookclone-97623",
  storageBucket: "facebookclone-97623.appspot.com",
  messagingSenderId: "317363739664",
  appId: "1:317363739664:web:9a260c0550d0c976f97e95",
  measurementId: "G-M9LMXGMZW3"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      console.log(result)
    })
    .catch((error) => {
      console.log(error);
    });
  };
  // localStorage.setItem("name", name);
  // localStorage.setItem("email", email);
  // localStorage.setItem("profilePic", profilePic);