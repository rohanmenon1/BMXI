import React, { useState } from 'react';
import './Signup.css'; 
import writeUserData from './writeUser.js'
import writeCounter from './readCounter.js'

const Signup = ({ onSignupSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    const isSignupSuccessful = true; 
    console.log(1)

    if (isSignupSuccessful) {
      writeUserData(writeCounter(), {username}, {password}, 0, 0)
      onSignupSuccess(); 
      console.log('ok')
    } else {

    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-header">Sign Up</h1>
        <form onSubmit={handleSignup} className="signup-form">
          <label className="signup-label">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className="signup-label">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label className="signup-label">
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
