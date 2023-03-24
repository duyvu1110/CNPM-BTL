import React, { useState, useEffect } from 'react';
import Board from './Board';
import './style.css';
function Match() {
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json');
      const data = await response.json();
      setMatchData(data);
    }

    fetchData();
  }, []);

  if (!matchData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p className='match_id'>Match_ID: {matchData.match_id}</p>
      <div className='match-in4'>
        <div className='team1-in4'>
          <span className='team1_id'>{matchData.team1_id}</span>
          <span className='time-left'>Time left: {matchData.time1}</span>
        </div>
        <div className='img1'></div>
        <div className='scored'>
          <span> {matchData.score1}-{matchData.score2}</span>
        </div>
        <div className='img2'></div>
        <div className='team2-in4'>
          <span className='team2_id'> {matchData.team2_id}</span>
          {/* <div className='ava2'></div> */}
          <span className='time-left'>Time left: {matchData.time2}</span>
        </div>
      </div>


      <div className='turn'>
        <span>{matchData.turn}</span>
        <span>'s</span> 
        <span>turn</span>
        </div>
      
      <Board matchData={matchData} />
      {/* {matchData.status !== "None" &&
        <p>Status: {matchData.status}</p>
      } */}
    </div>
  );
}

export default Match;
