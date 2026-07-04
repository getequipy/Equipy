import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC_1Xyt33-zyjsYCEds9g-G22ybY8VVgxw",
  authDomain: "gen-lang-client-0588412785.firebaseapp.com",
  projectId: "gen-lang-client-0588412785",
  storageBucket: "gen-lang-client-0588412785.firebasestorage.app",
  messagingSenderId: "94137590873",
  appId: "1:94137590873:web:ee1c6b2fe611ff54d9bd48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with the specific custom database ID
export const db = getFirestore(app, "ai-studio-76c21149-e9d0-4363-8a44-f7af3d7af236");
