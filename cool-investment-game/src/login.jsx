import React, { useState } from 'react';
import './Login.css'; // Make sure to create a Login.css file for styling
import { Link } from 'react-router-dom';


const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // TODO: Add actual login logic here
    const isLoginSuccessful = true; // Simulate a successful login

    if (isLoginSuccessful) {
      onLoginSuccess(); // Call the onLoginSuccess function passed as a prop
    } else {
      // Handle login failure (e.g., display an error message)
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
