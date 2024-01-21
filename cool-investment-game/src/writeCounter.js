import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Game from './game';
import Dashboard from './dashboard';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Code for reading and writing
import { ref, set, onValue } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC3slWmSWZebwE1MMVAE8MCwKK5gYS4cI",
  authDomain: "cool-investment-game.firebaseapp.com",
  databaseURL: "https://cool-investment-game-default-rtdb.firebaseio.com",
  projectId: "cool-investment-game",
  storageBucket: "cool-investment-game.appspot.com",
  messagingSenderId: "409980403207",
  appId: "1:409980403207:web:c73dcd26fc024f7bbf34a2",
  measurementId: "G-V9GP5E2N8Y",
  databaseURL: "https://cool-investment-game-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const writerCounter = function writeCounterData(number) {
  const db = database;
  set(ref(db, 'counter/' + number), {
    counterNumber: number + 1
  });
}

export default writerCounter;