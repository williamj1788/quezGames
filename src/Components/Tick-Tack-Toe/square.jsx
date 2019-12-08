import React from "react";
import player from "../Img/x.png";
import computer from "../Img/BlueCircle.png";

function Square({ onClick, positionState }) {
  function changeImg() {
    switch (positionState) {
      case "player":
        return player;
      case "computer":
        return computer;
      default:
        return "";
    }
  }

  return (
    <div
      className="square"
      style={{ backgroundImage: `url(${changeImg()})` }}
      onClick={() => onClick("player")}
    ></div>
  );
}
export default Square;
