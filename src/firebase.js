
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBqaDUJ66nKhpVtsPbk7Be0cXqmu9nMCKE",
  authDomain: "contact-forms-6393a.firebaseapp.com",
  projectId: "contact-forms-6393a",
  storageBucket: "contact-forms-6393a.appspot.com",
  messagingSenderId: "262770667478",
  appId: "1:262770667478:web:2bc5473f9891891742fe77"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db } 