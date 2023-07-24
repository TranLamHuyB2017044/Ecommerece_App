// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRj_f3abIDyRNhVtiR_pgi-PLWu71eJec",
  authDomain: "tranlamhuy-fe-shopping.firebaseapp.com",
  projectId: "tranlamhuy-fe-shopping",
  storageBucket: "tranlamhuy-fe-shopping.appspot.com",
  messagingSenderId: "220755512267",
  appId: "1:220755512267:web:97eb41a8d8ff5943fd444e",
  measurementId: "G-PFTEYR3795"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);