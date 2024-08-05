// FirebaseConfig.tsx
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC653VtAn5FzFKBTlU3uNicdPlA3C_15WE",
    authDomain: "cabbookingapp-528b5.firebaseapp.com",
    projectId: "cabbookingapp-528b5",
    storageBucket: "cabbookingapp-528b5.appspot.com",
    messagingSenderId: "731497388716",
    appId: "1:731497388716:web:b58bce92ec63dd966f1d09"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

console.log(db);

export { db, app };
