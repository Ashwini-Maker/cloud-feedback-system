import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpOITmCQUqvsWmYaTqiOxYR7jSDbhpbbQ",
  authDomain: "cloud-feedback-system-8479c.firebaseapp.com",
  projectId: "cloud-feedback-system-8479c",
  storageBucket: "cloud-feedback-system-8479c.firebasestorage.app",
  messagingSenderId: "293249509616",
  appId: "1:293249509616:web:0f2c4487528faa1d3afa35"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
