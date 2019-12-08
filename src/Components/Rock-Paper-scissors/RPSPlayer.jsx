import React from "react";

var rock = require("../Img/Rock.png");
var paper = require("../Img/Paper.png");
var scissors = require("../Img/sci.png");
var white = require("../Img/White.jpg");

export default class RPSPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.changeImg = this.changeImg.bind(this);
  }
  changeImg(play) {
    if (play === "rock") {
      return rock;
    } else if (play === "paper") {
      return paper;
    } else if (play === "scissors") {
      return scissors;
    } else {
      return white;
    }
  }

  render() {
    return (
      <div className="RPS-player">
        <div className="score-div">
          <span
            className="RPS-player-score"
            style={{ color: this.props.color }}
          >
            {this.props.player + ":"}{" "}
          </span>
          <span
            className="RPS-player-score"
            style={{ color: this.props.color }}
          >
            {this.props.score}
          </span>
        </div>
        <img
          className="RPS-imgs"
          src={this.changeImg(this.props.play)}
          alt=""
        />
        <p
          className="RPS-player-score"
          style={{ color: this.props.color, textAlign: "center" }}
        >
          {this.props.play}
        </p>
      </div>
    );
  }
}
