import React from "react";
import RPSGame from "./RPSGame";
import { Link } from "react-router-dom";

function RPS() {
  return (
    <div id="main">
      <div id="container">
        <div className="titleBar">
          <h1 className="title game">Rock Paper Scissors</h1>
          <Link className="flex homeButton link" to="/">
            Home
          </Link>
        </div>
        <RPSGame />
      </div>
    </div>
  );
}
export default RPS;
