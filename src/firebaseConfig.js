
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDqt8Rr7f9yFLTULLbCJoabYDSbhDs59LE",
    authDomain: "drive-acc39.firebaseapp.com",
    projectId: "drive-acc39",
    storageBucket: "drive-acc39.appspot.com",
    messagingSenderId: "979124736414",
    appId: "1:979124736414:web:f7c80752bd181a157a868f",
    measurementId: "G-H871E66K24"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
