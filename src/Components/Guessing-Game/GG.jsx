import React from "react";
import GGGame from "./GGGame";

function GG({ onClick }) {
  return (
    <div id="main">
      <div id="container">
        <div className="titleBar">
          <h1 className="title game">Guessing Game</h1>
          <button className="homeButton" type="button" onClick={onClick}>
            Home
          </button>
        </div>
        <GGGame />
      </div>
    </div>
  );
}

export default GG;
