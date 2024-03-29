import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Game from './game';
import Dashboard from './dashboard';
import readerData from './readUserData';
import writerStocks from './writeStock';
import writerUser from './writeUser';

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
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={!isLoggedIn ? <Login onLoginSuccess={() => setLoggedIn(true)} /> : <Dashboard />} />
            <Route path="/signup" element={<Signup onSignupSuccess={() => setLoggedIn(true)} />} />
            <Route path="/game" element={<Game />} />
            {/* ... other routes */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}


function writeUserData(userId, userName, emailId, password) {
  const db = database;
  set(ref(db, 'users/' + userId), {
    username: userName,
    email: emailId,
    pass : password
  });
}

function writeStockData(stockId, stockName, stockPrice, arrayOfPrices) {
  set(ref(database, 'stock/' + stockId), {
    stockId: stockId,
    stockName: stockName,
    stockPrice: stockPrice,
    arrayOfPrices: arrayOfPrices
  });
}

//import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();

function readUserData(userId){
  const starCountRef = ref(db, 'users/' + userId + '/starCount');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    useState(userId, data);
  });
}
readerData(1);
writerStocks(1, "Google", "999;992;823");
writerUser(1, "Rohan", "BigBeans", 10000, 3);


//writeUserData(1, "Rohan", "wow", "sdasd");
//writeStockData(1, "Google", 999, "999,999,100");

export default App;
