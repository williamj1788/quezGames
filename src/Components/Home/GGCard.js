import React from "react";

export default class GGCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div className="GG card" onClick={this.handleClick}>
        <h3 className="card-title">Guessing Game</h3>
        <h3 className="card-description">Click to play the Guessing Game</h3>
      </div>
    );
  }
}
