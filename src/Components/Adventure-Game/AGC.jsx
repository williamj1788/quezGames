import React from "react";
import AGCGame from "./AGCGame";

export default class AGC extends React.Component {
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
            <h1 className="title game">Adventure Game</h1>
            <button
              className="homeButton"
              type="button"
              onClick={this.handleOnClick}
            >
              Home
            </button>
          </div>
          <AGCGame />
        </div>
      </div>
    );
  }
}
