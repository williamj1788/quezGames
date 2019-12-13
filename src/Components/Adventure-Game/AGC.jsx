import React from "react";
import AGCGame from "./AGCGame";

function AGC({ onClick }) {
  return (
    <div id="main">
      <div id="container">
        <div className="titleBar">
          <h1 className="title game">Adventure Game</h1>
          <button className="homeButton" type="button" onClick={onClick}>
            Home
          </button>
        </div>
        <AGCGame />
      </div>
    </div>
  );
}

export default AGC;
