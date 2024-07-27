// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqcfpPr4s3keUnPeReG_zMTDxNNO-NS2Q",
  authDomain: "summarist-3f893.firebaseapp.com",
  projectId: "summarist-3f893",
  storageBucket: "summarist-3f893.appspot.com",
  messagingSenderId: "892648487966",
  appId: "1:892648487966:web:43a68e1c40d16a1247820f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);