import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <div id="container">
        <h1 className="title">QuezGames</h1>
        <h3 className="title-sub">Click To Play A Game</h3>
        <div className="gameContainer">
          <TTTCard />
          <RPSCard />
          <GGCard />
          <AGCard />
        </div>
      </div>
    </div>
  );
}

export default Home;

function TTTCard() {
  return (
    <Link className="link" to="tic-tac-toe">
      <div className="TTT card">
        <h3 className="card-title">Tic Tac Toe</h3>
        <h3 className="card-description">
          Click to play a classic game of Tic Tac Toe
        </h3>
      </div>
    </Link>
  );
}

function RPSCard() {
  return (
    <Link className="link" to="rock-paper-scissors">
      <div className="RPS card">
        <h3 className="card-title">Rock Paper Scissors</h3>
        <h3 className="card-description">
          Click to play a classic game of Rock Paper Scissors
        </h3>
      </div>
    </Link>
  );
}

function GGCard() {
  return (
    <Link className="link" to="guess-game">
      <div className="GG card">
        <h3 className="card-title">Guessing Game</h3>
        <h3 className="card-description">Click to play the Guessing Game</h3>
      </div>
    </Link>
  );
}

function AGCard() {
  return (
    <Link className="link" to="adventure">
      <div className="AG card">
        <h3 className="card-title">Adventure Game</h3>
        <h3 className="card-description">
          Click to play a text based adventure game
        </h3>
      </div>
    </Link>
  );
}
