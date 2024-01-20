import React, { useState } from 'react';
import './Signup.css'; // Make sure to create a Signup.css file for styling

const Signup = ({ onSignupSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    // TODO: Add actual signup logic here
    const isSignupSuccessful = true; // Simulate a successful signup

    if (isSignupSuccessful) {
      onSignupSuccess(); // Call the onSignupSuccess function passed as a prop
    } else {
      // Handle signup failure (e.g., display an error message)
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
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
