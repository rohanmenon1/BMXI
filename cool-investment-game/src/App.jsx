import React, { useState } from 'react';
import './App.css';
import Dashboard from './dashboard';

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
        <h1>Login</h1>
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