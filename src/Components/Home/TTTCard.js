import React from "react";

export default class TTTCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div className="TTT card" onClick={this.handleClick}>
        <h3 className="card-title">Tic Tac Toe</h3>
        <h3 className="card-description">
          Click to play a classic game of Tic Tac Toe
        </h3>
      </div>
    );
  }
}
