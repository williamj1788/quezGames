import React, { useState } from "react";
import TTTGame from "./TTTGame";
import { Link } from "react-router-dom";

function TTT() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [scoreTitle, setScoreTitle] = useState("The Game Has Began!");

  function declareWinner(player) {
    if (player === "player") {
      incrementPlayerScore();
    } else if (player === "computer") {
      incrementComputerScore();
    } else {
      setScoreTitle("There Was A Tied");
    }
  }

  function incrementPlayerScore() {
    setPlayerScore(s => s + 1);
    setScoreTitle("The Player Has Won!");
  }

  function incrementComputerScore() {
    setComputerScore(s => s + 1);
    setScoreTitle("The Computer Has Won!");
  }

  return (
    <div className="main">
      <div id="container">
        <div className="titleBar">
          <h1 className="title game">Tick Tack Toe</h1>
          <Link className="flex homeButton link" to="/">
            Home
          </Link>
        </div>
        <div id="score-container">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="computer">Computer: </p>
            <p className="computer">{computerScore}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="player">Player: </p>
            <p className="player">{playerScore}</p>
          </div>
        </div>
        <h3 id="score-title">{scoreTitle}</h3>
        <TTTGame declareWinner={declareWinner} />
      </div>
    </div>
  );
}

export default TTT;
