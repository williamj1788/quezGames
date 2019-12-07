import React from "react";
import player from "../Img/x.png";
import computer from "../Img/BlueCircle.png";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.changeImg = this.changeImg.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  changeImg() {
    switch (this.props.positionState) {
      case "player":
        return player;
      case "computer":
        return computer;
      default:
        return "";
    }
  }
  handleOnClick() {
    this.props.onClick("player");
  }

  render() {
    return (
      <div
        className="square"
        style={{ backgroundImage: "url(" + this.changeImg() + ")" }}
        onClick={this.handleOnClick}
      ></div>
    );
  }
}
