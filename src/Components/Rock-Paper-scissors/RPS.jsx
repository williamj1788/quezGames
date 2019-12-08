import React from "react";
import RPSGame from "./RPSGame";

export default class RPS extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div id="main">
        <div id="container">
          <div className="titleBar">
            <h1 className="title game">Rock Paper Scissors</h1>
            <button
              className="homeButton"
              type="button"
              onClick={this.handleOnClick}
            >
              Home
            </button>
          </div>
          <RPSGame />
        </div>
      </div>
    );
  }
}
