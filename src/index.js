import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './index.css';
import "./stylesheets.js"
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC40NPif1Vq1xF-Y_6jbVSlnVnCGz2YQE",
  authDomain: "ecommerce-sdm-coderhouse.firebaseapp.com",
  projectId: "ecommerce-sdm-coderhouse",
  storageBucket: "ecommerce-sdm-coderhouse.appspot.com",
  messagingSenderId: "22060910644",
  appId: "1:22060910644:web:3b6b871fa071be679c6261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
