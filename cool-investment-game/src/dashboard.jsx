import React from 'react';
import './Dashboard.css'; // Ensure this points to your CSS file
import { useNavigate } from 'react-router-dom';

import playButtonImage from './money.png';


const Dashboard = ({ loginID, previousScore, gamesPlayed }) => {
  // Static leaderboard data defined within the component
  const leaderboardData = [
    { name: 'Alice', score: 120 },
    { name: 'Bob', score: 110 },
    // ... more leaderboard entries
  ];
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate('/game'); // This will navigate to the Game component when called
  };


  return (
    <div className="dashboard-container">
    <h1 className="dashboard-header">Dashboard</h1> {/* Add this line for the Dashboard header */}
    <div className="dashboard">
      <div className="section user-stats">
        <h2>Welcome {loginID}</h2>
        <p>Your previous score: {previousScore}</p>
        <p>Number of games played: {gamesPlayed}</p>
      </div>
      <div className="section main-content">
        {/* Add the play button here */}
        <button className="play-button" onClick={handlePlay}>
          <img src={playButtonImage} alt="" /> { }
        </button>
      </div>
      <div className="section leaderboard">
        <h2>Leaderboard</h2>
        <ul>
          {leaderboardData.map((entry, index) => (
            <li key={index} className={`entry entry-${index}`}>
              <span className="rank">{index + 1}</span>
              <span className="name">{entry.name}</span>
              <span className="score">{entry.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
