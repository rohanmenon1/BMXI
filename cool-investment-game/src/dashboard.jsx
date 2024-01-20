import React, { useEffect, useRef } from 'react';
import './Dashboard.css'; // Ensure this points to your CSS file
import { useNavigate } from 'react-router-dom';

import playButtonImage from './money.png';


const Dashboard = ({ loginID, previousScore, gamesPlayed }) => {
  // Static leaderboard data defined within the component

  const stocksData = [
    { name: 'Dow Jones', trend: 'rising', price: '35,000' },
    { name: 'S&P 500', trend: 'falling', price: '4,500' },
    { name: 'AAPL', trend: 'rising', price: '22222' },
    { name: 'BA', trend: 'rising', price: '35,000' },
    { name: 'DIS', trend: 'falling', price: '4,500' },
    { name: 'NKE', trend: 'rising', price: '22222' },
    { name: 'AMZN', trend: 'rising', price: '35,000' },
    { name: 'HD', trend: 'falling', price: '4,500' },
    { name: 'AAPL', trend: 'rising', price: '22222' },
    { name: 'BA', trend: 'rising', price: '35,000' },
    { name: 'DIS', trend: 'falling', price: '4,500' },
    { name: 'YOLOOO', trend: 'rising', price: '22222' },
    // ... more stocks
  ].concat([
    { name: 'Dow Jones', trend: 'rising', price: '35,000' },
    { name: 'S&P 500', trend: 'falling', price: '4,500' },
    { name: 'AAPL', trend: 'rising', price: '22222' },
    { name: 'BA', trend: 'rising', price: '35,000' },
    { name: 'DIS', trend: 'falling', price: '4,500' },
    { name: 'NKE', trend: 'rising', price: '22222' },
    { name: 'AMZN', trend: 'rising', price: '35,000' },
    { name: 'HD', trend: 'falling', price: '4,500' },
    { name: 'AAPL', trend: 'rising', price: '22222' },
    { name: 'BA', trend: 'rising', price: '35,000' },
    { name: 'DIS', trend: 'falling', price: '4,500' },
    { name: 'YOLOOO', trend: 'rising', price: '22222' },
  ]);
  const leaderboardData = [
    { name: 'Alice', score: 120 },
    { name: 'Bob', score: 110 },
    // ... more leaderboard entries
  ];
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate('/game'); // This will navigate to the Game component when called
  };
  const stocksListRef = useRef(null);

  useEffect(() => {
    const list = stocksListRef.current;
    if (!list) return;

    const scrollAmount = 1; // Adjust the scroll amount per interval as needed
    const scrollSpeed = 10; // Adjust the interval speed as needed

    // Function to scroll the list
    const scrollList = () => {
      list.scrollTop += scrollAmount;

      // When we're close to the bottom...
      if (list.scrollTop >= (list.scrollHeight / 2)) {
        // ...reset to the top
        list.scrollTop = 0;
      }
    };

    const intervalId = setInterval(scrollList, scrollSpeed);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


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
        <div className="stocks-list" ref={stocksListRef}>
          {stocksData.map((stock, index) => (
            <div key={index} className="stock-item">
              <div className="stock-column stock-name">{stock.name}</div>
              <div className="stock-column stock-trend-column">
                <span className={`stock-trend ${stock.trend}`}></span>
              </div>
              <div className="stock-column stock-price">{stock.price}</div>
            </div>
          ))}
        </div>
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
