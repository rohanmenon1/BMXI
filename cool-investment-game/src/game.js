import React from 'react';
import './Dashboard.css'; 

const Dashboard = ({ loginID, previousScore, gamesPlayed }) => {
  
  const leaderboardData = [
    { name: 'stock 1', score: 110 },
    { name: 'stock 2', score: 110 },
    { name: 'stock 3', score: 110 },
    { name: 'stock 4', score: 110 },
    { name: 'stock 5', score: 110 },
    { name: 'stock 6', score: 110 },
    { name: 'stock 7', score: 110 },
    { name: 'stock 8', score: 110 },
    { name: 'stock 9', score: 110 },
    { name: 'stock 10', score: 110 }
  ];

  return (
    <div className="dashboard">
      <div className="section user-stats">
        <h2>Welcome {loginID}</h2>
        <p>Your previous score: {previousScore}</p>
        <p>Number of games played: {gamesPlayed}</p>
      </div>
      <div className="section main-content">
        {/* Main content goes here */}
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
  );
};

export default Dashboard;
