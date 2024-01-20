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
        {
          <script>
            var display = document.querySelector('#timer');
            startTimer(300, display);
          </script>
        }
      </div>
      <div className="section leaderboard">
        <h2>Leaderboard</h2>
        <ul>
          {leaderboardData.map((entry, index) => (
            <li key={index} className={`entry entry-${index}`}>
              <span className="rank">{index + 1}</span>
              <span className="name">{entry.name}</span>
              <span className="price">{entry.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  function stockChange(price) {
    price = Math.random() * 20 - 10;
  }

  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
        clearInterval(timer);
        display.textContent = "Time's up!";
      }
    }, 1000);
  }
};

export default Dashboard;
