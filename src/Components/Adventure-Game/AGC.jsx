import React from "react";
import AGCGame from "./AGCGame";
import { Link } from "react-router-dom";

function AGC() {
  return (
    <div id="main">
      <div id="container">
        <div className="titleBar">
          <h1 className="title game">Adventure Game</h1>
          <Link className="flex homeButton link" to="/">
            Home
          </Link>
        </div>
        <AGCGame />
      </div>
    </div>
  );
}

export default AGC;
