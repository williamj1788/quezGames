import React from "react";
import TTTCard from "./TTTCard";
import RPSCard from "./RPSCard";
import GGCard from "./GGCard";
import AGCard from "./AGCard";

export default class Home extends React.Component {
  render() {
    return (
      <div id="main">
        <div id="container">
          <h1 className="title">QuezGames</h1>
          <h3 className="title-sub">Click To Play A Game</h3>
          <div className="gameContainer">
            <TTTCard onClick={this.props.toggleDisplays[1]} />
            <RPSCard onClick={this.props.toggleDisplays[4]} />
            <GGCard onClick={this.props.toggleDisplays[3]} />
            <AGCard onClick={this.props.toggleDisplays[2]} />
          </div>
        </div>
      </div>
    );
  }
}
