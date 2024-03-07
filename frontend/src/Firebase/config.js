import firebase from "firebase/compat/app"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO1bBK82Cv0WsMLDcpXyKZtq0OwDG__U4",
  authDomain: "efarming-db363.firebaseapp.com",
  projectId: "efarming-db363",
  storageBucket: "efarming-db363.appspot.com",
  messagingSenderId: "647099681317",
  appId: "1:647099681317:web:cca7d7fd0c69b040030dcc",
}

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig)
