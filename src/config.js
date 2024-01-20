// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB5Y1z4ownJy4aQ7Be5vPF9hlEdwnyUQf8',
  authDomain: 'api-theway.firebaseapp.com',
  projectId: 'api-theway',
  storageBucket: 'api-theway.appspot.com',
  messagingSenderId: '869779944677',
  appId: '1:869779944677:web:c1daf71e0fd27cf467d00c'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
