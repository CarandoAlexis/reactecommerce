import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyb-zeSA5ijk1SEYfJOO2viCCd3t7H1q0",
  authDomain: "proyectoreact-b3ece.firebaseapp.com",
  projectId: "proyectoreact-b3ece",
  storageBucket: "proyectoreact-b3ece.appspot.com",
  messagingSenderId: "9564943466",
  appId: "1:9564943466:web:1ef567efd4941b20c7c613"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
)
