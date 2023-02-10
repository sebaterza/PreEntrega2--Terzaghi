import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./componentes/NavBar/NavBar.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
export const db = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
