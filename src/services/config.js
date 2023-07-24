import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyAClupjtAEiJiCGaF0kFZ_cKR80OYy_mBk",
  authDomain: "coderhouse-b8768.firebaseapp.com",
  projectId: "coderhouse-b8768",
  storageBucket: "coderhouse-b8768.appspot.com",
  messagingSenderId: "155368310461",
  appId: "1:155368310461:web:95e8a3b325bb5b9e6019d4"
};




const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);