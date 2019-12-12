import React from "react";

export default class RPSCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div className="RPS card" onClick={this.handleClick}>
        <h3 className="card-title">Rock Paper Scissors</h3>
        <h3 className="card-description">
          Click to play A classic game of Rock Paper Scissors
        </h3>
      </div>
    );
  }
}
