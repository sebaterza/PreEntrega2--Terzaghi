import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./componentes/NavBar/NavBar.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWb5fLjkCAhncbaL-MFL3TbNm4PL1tZtg",
  authDomain: "coderhouse-ecommerce-terzaghi.firebaseapp.com",
  projectId: "coderhouse-ecommerce-terzaghi",
  storageBucket: "coderhouse-ecommerce-terzaghi.appspot.com",
  messagingSenderId: "1067724657057",
  appId: "1:1067724657057:web:d716fe3370d6a35e2afbe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
