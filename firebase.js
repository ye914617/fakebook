import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWFbfe00Ol5UZA10AbDFgQgotpuiOeDGI",
  authDomain: "fakebook-d18f3.firebaseapp.com",
  projectId: "fakebook-d18f3",
  storageBucket: "fakebook-d18f3.appspot.com",
  messagingSenderId: "805582766958",
  appId: "1:805582766958:web:b364a0a691f33bceb8f77f",
};
initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { db, storage };
