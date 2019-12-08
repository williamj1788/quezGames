import React from "react";
import RPSGame from "./RPSGame";

function RPS({ onClick }) {
  return (
    <div id="main">
      <div id="container">
        <div className="titleBar">
          <h1 className="title game">Rock Paper Scissors</h1>
          <button className="homeButton" type="button" onClick={onClick}>
            Home
          </button>
        </div>
        <RPSGame />
      </div>
    </div>
  );
}
export default RPS;
