// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIudevdPFhQguUXiTecUoAlYLMgGrsfM4",
  authDomain: "genius-car-service-91fdd.firebaseapp.com",
  projectId: "genius-car-service-91fdd",
  storageBucket: "genius-car-service-91fdd.appspot.com",
  messagingSenderId: "370366350306",
  appId: "1:370366350306:web:d363c9e3b35abaf5de2fbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
