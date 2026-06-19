import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC9EHK1O_N2B4y6k-xPLU1NoVLncXXVJJ8",
  authDomain: "trendhub-react.firebaseapp.com",
  projectId: "trendhub-react",
  storageBucket: "trendhub-react.firebasestorage.app",
  messagingSenderId: "14643534634",
  appId: "1:14643534634:web:61399dabb89fe1f8aa1c53"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export default app