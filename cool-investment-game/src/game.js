import React from 'react';
import './Dashboard.css'; 
import writerStocks from './writeStock'; 
import writerUser from './writeUser';
const Game = ({ loginID, previousScore, gamesPlayed }) => {
  
  const leaderboardData = [
    { name: 'User 1', score: 110 },
    { name: 'User 2', score: 110 },
    { name: 'User 3', score: 110 },
    { name: 'User 4', score: 110 },
    { name: 'User 5', score: 110 },
   
  ];

  return (
    <div className="dashboard">
      <div className="section stock-list">
        <h2>Select a stock{loginID}</h2>
        <li>
          <button>Gluegle: GGL</button> <br/>
        </li>
        <li>
          <button>Netflyx: NTX</button> <br/>
        </li>
        <li>
          <button>Spotifree: SPT</button> <br/>
        </li>
        <li>
          <button>Amazoom: AMZ </button> <br/>
        </li>
        <li>
          <button>Blomberg: BML </button> <br/>
        </li>
      </div>
      <div className="section main-content">
        <marquee> AI News Goes Here.                          Warren Buffet says buy Google Stock and eat beans</marquee>
        <body>
          CASH: 10000$,  TIME LEFT: 45s
        </body>
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

export default Game;
