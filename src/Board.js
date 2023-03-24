import React from 'react';
import './Board.css';
function Board({ matchData }) {
  const boardSize = matchData.size;
  const boardRows = [];
  for (let i = 0; i < boardSize; i++) {
    const cells = [];
    for (let j = 0; j < boardSize; j++) {
      const cellValue = matchData.board[i][j];
      const cellClass = cellValue === "X" ? "x-cell" : cellValue === "O" ? "o-cell" : "";
      cells.push(<div key={`${i}${j}`} className={`cell ${cellClass}`}>{cellValue}</div>);
    }
    boardRows.push(<div key={i} className="row">{cells}</div>);
  }
  return (
    <div className="board">
      {boardRows}
    </div>
  );
}

export default Board;
