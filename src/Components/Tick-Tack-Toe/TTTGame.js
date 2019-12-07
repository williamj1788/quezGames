import React, { useState } from "react";
import Square from "./square";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default class TTTGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      computerNum: 0,
      numberOfSquaresActive: 0,
      square1: "none",
      square2: "none",
      square3: "none",
      square4: "none",
      square5: "none",
      square6: "none",
      square7: "none",
      square8: "none",
      square9: "none"
    };
    this.computerTurn = this.computerTurn.bind(this);
    this.incrementNumberOfSquaresActive = this.incrementNumberOfSquaresActive.bind(
      this
    );
    this.setActivetoPlayer = this.setActivetoPlayer.bind(this);
    this.setActivetoComputer = this.setActivetoComputer.bind(this);
    this.clearBoardAndAddPoint = this.clearBoardAndAddPoint.bind(this);
    this.getNumberOfSquaresActive = this.getNumberOfSquaresActive.bind(this);
  }

  componentDidUpdate(nextpros, nextstate) {
    let state = this.state;
    let squareArray = [
      state.square1,
      state.square2,
      state.square3,
      state.square4,
      state.square5,
      state.square6,
      state.square7,
      state.square8,
      state.square9
    ];
    if (this.getNumberOfSquaresActive() < 9) {
      if (
        squareArray[0] === "player" &&
        squareArray[4] === "player" &&
        squareArray[8] === "player"
      ) {
        this.clearBoardAndAddPoint("player");
      } else if (
        squareArray[0] === "computer" &&
        squareArray[2] === "computer" &&
        squareArray[8] === "computer"
      ) {
        this.clearBoardAndAddPoint("computer");
      } else if (
        squareArray[2] === "player" &&
        squareArray[4] === "player" &&
        squareArray[6] === "player"
      ) {
        this.clearBoardAndAddPoint("player");
      } else if (
        squareArray[2] === "computer" &&
        squareArray[4] === "computer" &&
        squareArray[6] === "computer"
      ) {
        this.clearBoardAndAddPoint("computer");
      } else if (
        squareArray[0] === "player" &&
        squareArray[1] === "player" &&
        squareArray[2] === "player"
      ) {
        this.clearBoardAndAddPoint("player");
      } else if (
        squareArray[0] === "computer" &&
        squareArray[1] === "computer" &&
        squareArray[2] === "computer"
      ) {
        this.clearBoardAndAddPoint("computer");
      } else if (
        squareArray[2] === "player" &&
        squareArray[5] === "player" &&
        squareArray[8] === "player"
      ) {
        this.clearBoardAndAddPoint("player");
      } else if (
        squareArray[2] === "computer" &&
        squareArray[5] === "computer" &&
        squareArray[8] === "computer"
      ) {
        this.clearBoardAndAddPoint("computer");
      } else if (
        squareArray[8] === "player" &&
        squareArray[7] === "player" &&
        squareArray[6] === "player"
      ) {
        this.clearBoardAndAddPoint("player");
      } else if (
        squareArray[8] === "computer" &&
        squareArray[7] === "computer" &&
        squareArray[6] === "computer"
      ) {
        this.clearBoardAndAddPoint("computer");
      } else if (
        squareArray[0] === "player" &&
        squareArray[3] === "player" &&
        squareArray[6] === "player"
      ) {
        this.clearBoardAndAddPoint("player");
      } else if (
        squareArray[0] === "computer" &&
        squareArray[3] === "computer" &&
        squareArray[6] === "computer"
      ) {
        this.clearBoardAndAddPoint("computer");
      } else if (
        squareArray[1] === "player" &&
        squareArray[4] === "player" &&
        squareArray[7] === "player"
      ) {
        this.clearBoardAndAddPoint("player");
      } else if (
        squareArray[1] === "computer" &&
        squareArray[4] === "computer" &&
        squareArray[7] === "computer"
      ) {
        this.clearBoardAndAddPoint("computer");
      } else if (
        squareArray[3] === "player" &&
        squareArray[4] === "player" &&
        squareArray[5] === "player"
      ) {
        this.clearBoardAndAddPoint("player");
      } else if (
        squareArray[3] === "computer" &&
        squareArray[4] === "computer" &&
        squareArray[5] === "computer"
      ) {
        this.clearBoardAndAddPoint("player");
      }
    } else {
      this.clearBoardAndAddPoint("tie");
    }
  }
  getNumberOfSquaresActive() {
    let state = this.state;
    let squareArray = [
      state.square1,
      state.square2,
      state.square3,
      state.square4,
      state.square5,
      state.square6,
      state.square7,
      state.square8,
      state.square9
    ];
    return squareArray.filter(item => {
      return item !== "none";
    }).length;
  }

  clearBoardAndAddPoint(winner) {
    let callback;
    if (winner === "player") {
      callback = this.props.addScore[1];
    } else if (winner === "computer") {
      callback = this.props.addScore[0];
    } else {
      callback = this.props.addScore[2];
    }
    this.setState(
      {
        computerNum: 0,
        numberOfSquaresActive: 0,
        square1: "none",
        square2: "none",
        square3: "none",
        square4: "none",
        square5: "none",
        square6: "none",
        square7: "none",
        square8: "none",
        square9: "none"
      },
      callback
    );
  }

  computerTurn() {
    if (this.getNumberOfSquaresActive() < 9) {
      let number = getRandomInt(1, 10);
      let tempState = "square" + number;
      if (this.state[tempState] === "none") {
        this.setActivetoComputer(number);
      } else {
        this.computerTurn();
      }
    }
  }
  incrementNumberOfSquaresActive(callback) {
    this.setState(
      { numberOfSquaresActive: this.state.numberOfSquaresActive + 1 },
      callback
    );
  }

  setActivetoPlayer(num) {
    let propety = "square" + num;
    if (this.state[propety] === "none") {
      this.setState({ [propety]: "player" }, () => {
        this.incrementNumberOfSquaresActive(this.computerTurn);
      });
    }
  }
  setActivetoComputer(num) {
    let propety = "square" + num;
    this.setState({ [propety]: "computer" }, () => {
      this.incrementNumberOfSquaresActive();
    });
  }

  render() {
    return (
      <div id="TTTGrid">
        <Square
          num={1}
          SquareList={this.state.square1}
          onClick={this.setActivetoPlayer}
        />
        <Square
          num={2}
          SquareList={this.state.square2}
          onClick={this.setActivetoPlayer}
        />
        <Square
          num={3}
          SquareList={this.state.square3}
          onClick={this.setActivetoPlayer}
        />
        <Square
          num={4}
          SquareList={this.state.square4}
          onClick={this.setActivetoPlayer}
        />
        <Square
          num={5}
          SquareList={this.state.square5}
          onClick={this.setActivetoPlayer}
        />
        <Square
          num={6}
          SquareList={this.state.square6}
          onClick={this.setActivetoPlayer}
        />
        <Square
          num={7}
          SquareList={this.state.square7}
          onClick={this.setActivetoPlayer}
        />
        <Square
          num={8}
          SquareList={this.state.square8}
          onClick={this.setActivetoPlayer}
        />
        <Square
          num={9}
          SquareList={this.state.square9}
          onClick={this.setActivetoPlayer}
        />
      </div>
    );
  }
}
