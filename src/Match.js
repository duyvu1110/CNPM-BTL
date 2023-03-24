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
      {matchData.status !== "None" &&
        <p>Status: {matchData.status}</p>
      }
      
      <p>Time left for team1: {matchData.time1}</p>
      <p>Time left for team2: {matchData.time2}</p>
      <p>Team1 ID: {matchData.team1_id}</p>
      <p>Team2 ID: {matchData.team2_id}</p>
      
      <div>{matchData.turn}'s turn</div>
      <p>Score: {matchData.score1}-{matchData.score2}</p>
      <Board matchData={matchData}/>
    </div>
  );
}

export default Match;

