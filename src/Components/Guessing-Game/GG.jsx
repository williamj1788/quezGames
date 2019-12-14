import React from "react";
import GGGame from "./GGGame";
import { Link } from "react-router-dom";

function GG() {
  return (
    <div id="main">
      <div id="container">
        <div className="titleBar">
          <h1 className="title game">Guessing Game</h1>
          <Link className="flex homeButton link" to="/">
            Home
          </Link>
        </div>
        <GGGame />
      </div>
    </div>
  );
}

export default GG;
