import React from "react";

import rock from "../Img/Rock.png";
import paper from "../Img/Paper.png";
import scissors from "../Img/sci.png";
import white from "../Img/White.jpg";

function RPSPlayer({ player, color, score, play }) {
  function determineImg(play) {
    switch (play) {
      case "rock":
        return rock;
      case "paper":
        return paper;
      case "scissors":
        return scissors;
      default:
        return white;
    }
  }

  return (
    <div className="RPS-player">
      <div className="score-div">
        <span className="RPS-player-score" style={{ color }}>
          {player + ":"}
        </span>
        <span className="RPS-player-score" style={{ color }}>
          {score}
        </span>
      </div>
      <img className="RPS-imgs" src={determineImg(play)} alt="" />
      <p className="RPS-player-score" style={{ color, textAlign: "center" }}>
        {play}
      </p>
    </div>
  );
}

export default RPSPlayer;
