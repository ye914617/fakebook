import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWFbfe00Ol5UZA10AbDFgQgotpuiOeDGI",
  authDomain: "fakebook-d18f3.firebaseapp.com",
  projectId: "fakebook-d18f3",
  storageBucket: "fakebook-d18f3.appspot.com",
  messagingSenderId: "805582766958",
  appId: "1:805582766958:web:b364a0a691f33bceb8f77f",
};

const firestore = getFirestore();
const specialday = doc(firestore, "sohaispec/2021-11-23");

function writeDoc() {
  const docData = {
    name: "sohai",
    price: 44,
    player: "stupid",
  };
  setDoc(specialday, docData);
}
writeDoc();
