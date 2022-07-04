// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaf5vFp2t3019cZxkIJ2YvfqNN-L9QQAQ",
  authDomain: "wish-io.firebaseapp.com",
  projectId: "wish-io",
  storageBucket: "wish-io.appspot.com",
  messagingSenderId: "37315735679",
  appId: "1:37315735679:web:ec89a50caae5cb9e538f4a",
  measurementId: "G-FPH5JY493G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;