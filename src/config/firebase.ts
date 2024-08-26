import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM2Bck1xKIn_0_IjPSsdusXf6DYrN5K80",
  authDomain: "beanstore-1.firebaseapp.com",
  projectId: "beanstore-1",
  storageBucket: "beanstore-1.appspot.com",
  messagingSenderId: "1097814476789",
  appId: "1:1097814476789:web:09dca28d98a73f0b9b82bc",
  measurementId: "G-DJYZ0LGM6Z",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
