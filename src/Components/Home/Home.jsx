import React from "react";

function Home({ toggleDisplays }) {
  return (
    <div id="main">
      <div id="container">
        <h1 className="title">QuezGames</h1>
        <h3 className="title-sub">Click To Play A Game</h3>
        <div className="gameContainer">
          <TTTCard onClick={toggleDisplays[1]} />
          <RPSCard onClick={toggleDisplays[4]} />
          <GGCard onClick={toggleDisplays[3]} />
          <AGCard onClick={toggleDisplays[2]} />
        </div>
      </div>
    </div>
  );
}

export default Home;

function TTTCard({ onClick }) {
  return (
    <div className="TTT card" onClick={onClick}>
      <h3 className="card-title">Tic Tac Toe</h3>
      <h3 className="card-description">
        Click to play a classic game of Tic Tac Toe
      </h3>
    </div>
  );
}

function RPSCard({ onClick }) {
  return (
    <div className="RPS card" onClick={onClick}>
      <h3 className="card-title">Rock Paper Scissors</h3>
      <h3 className="card-description">
        Click to play a classic game of Rock Paper Scissors
      </h3>
    </div>
  );
}

function GGCard({ onClick }) {
  return (
    <div className="GG card" onClick={onClick}>
      <h3 className="card-title">Guessing Game</h3>
      <h3 className="card-description">Click to play the Guessing Game</h3>
    </div>
  );
}

function AGCard({ onClick }) {
  return (
    <div className="AG card" onClick={onClick}>
      <h3 className="card-title">Adventure Game</h3>
      <h3 className="card-description">
        Click to play a text based adventure game
      </h3>
    </div>
  );
}
