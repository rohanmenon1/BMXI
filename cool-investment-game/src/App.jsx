import React, { useState } from 'react';
import './App.css';
import Dashboard from './dashboard';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    const isLoginSuccessful = true; 

    if (isLoginSuccessful) {
      setLoggedIn(true);
    } else {
      
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {!isLoggedIn && <h1>Login</h1>}
        {isLoggedIn ? (
          <Dashboard />
        ) : (
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </form>
        )}</header>
    </div>
  );
}

export default App;
