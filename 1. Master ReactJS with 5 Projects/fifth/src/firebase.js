import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "domain",
  projectId: "projectID",
  storageBucket: "bucket",
  messagingSenderId: "senderID",
  appId: "appID",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
