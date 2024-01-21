import React, { useState } from 'react';
import './Login.css'; 
import { Link } from 'react-router-dom';
import readerData from './readUserData.js'
import counterData from './readCounter.js';


const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    let isLoginSuccessful = false; 
    for(let i = 1; i <= counterData(); i++){
      let x = readerData(i)
      console.log(2)
      if(x.username.localecompare(username) && x.pass.localecompare(password)){
        console.log(3)
        isLoginSuccessful = true; 
        break;
      }
    }
    if (isLoginSuccessful) {
      onLoginSuccess(); 
    } else {
      console.log(counterData())
      console.log(readerData(1))
      console.log("Incorrect Login Credentials")
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-header">cool-investment-game v3.2</h1>
        <form onSubmit={handleLogin} className="login-form">
          <label className="login-label">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className="login-label">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-links">
          <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          <span className="signup-text">
            Don't have an account? <Link to="/signup" className="signup-link">Create one</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
