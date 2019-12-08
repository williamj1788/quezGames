import React from "react";
import RPSPlayer from "./RPSPlayer";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default class RPSGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {
        score: 0,
        play: "none"
      },
      computer: {
        score: 0,
        play: "none"
      },
      winner: {
        text: "Let's begin!",
        color: "#000000"
      }
    };
    this.choosePlayForPlayer = this.choosePlayForPlayer.bind(this);
    this.choosePlayForComputer = this.choosePlayForComputer.bind(this);
    this.decideWhoWins = this.decideWhoWins.bind(this);
  }

  choosePlayForPlayer(play) {
    this.setState(
      {
        player: {
          score: this.state.player.score,
          play: play
        }
      },
      this.choosePlayForComputer
    );
  }

  choosePlayForComputer() {
    let num = getRandomInt(1, 4);
    let play;
    if (num === 1) {
      play = "rock";
    } else if (num === 2) {
      play = "paper";
    } else {
      play = "scissors";
    }
    this.setState(
      {
        computer: {
          score: this.state.computer.score,
          play: play
        }
      },
      this.decideWhoWins
    );
  }

  decideWhoWins() {
    let player = this.state.player.play;
    let computer = this.state.computer.play;
    if (player === "rock" && computer === "scissors") {
      this.setState({
        player: {
          score: this.state.player.score + 1,
          play: this.state.player.play
        },
        winner: {
          text: "Player Wins!",
          color: "#00ADF9"
        }
      });
    } else if (player === "rock" && computer === "paper") {
      this.setState({
        computer: {
          score: this.state.computer.score + 1,
          play: this.state.computer.play
        },
        winner: {
          text: "Computer Wins!",
          color: "#FF0000"
        }
      });
    } else if (player === "rock" && computer === "rock") {
      this.setState({
        winner: {
          text: "Draw!",
          color: "#000000"
        }
      });
    } else if (player === "paper" && computer === "rock") {
      this.setState({
        player: {
          score: this.state.player.score + 1,
          play: this.state.player.play
        },
        winner: {
          text: "Player Wins!",
          color: "#00ADF9"
        }
      });
    } else if (player === "paper" && computer === "scissors") {
      this.setState({
        computer: {
          score: this.state.computer.score + 1,
          play: this.state.computer.play
        },
        winner: {
          text: "Computer Wins!",
          color: "#FF0000"
        }
      });
    } else if (player === "paper" && computer === "paper") {
      this.setState({
        winner: {
          text: "Draw!",
          color: "#000000"
        }
      });
    } else if (player === "scissors" && computer === "paper") {
      this.setState({
        player: {
          score: this.state.player.score + 1,
          play: this.state.player.play
        },
        winner: {
          text: "Player Wins!",
          color: "#00ADF9"
        }
      });
    } else if (player === "scissors" && computer === "rock") {
      this.setState({
        computer: {
          score: this.state.computer.score + 1,
          play: this.state.computer.play
        },
        winner: {
          text: "Computer Wins!",
          color: "#FF0000"
        }
      });
    } else if (player === "scissors" && computer === "scissors") {
      this.setState({
        winner: {
          text: "Draw!",
          color: "#000000"
        }
      });
    } else {
      alert("What happen!");
    }
  }

  render() {
    return (
      <div className="RPS-Game">
        <div id="RPS-container">
          <RPSPlayer
            color={"#00ADF9"}
            player={"Player"}
            score={this.state.player.score}
            play={this.state.player.play}
          />
          <div>
            <p id="RPS-winner" style={{ color: this.state.winner.color }}>
              {this.state.winner.text}
            </p>
          </div>
          <RPSPlayer
            color={"#FF0000"}
            player={"Computer"}
            score={this.state.computer.score}
            play={this.state.computer.play}
          />
        </div>
        <div id="RPS-button-container">
          <button
            className="RPS-button"
            onClick={() => {
              this.choosePlayForPlayer("rock");
            }}
          >
            Rock
          </button>
          <button
            className="RPS-button"
            onClick={() => {
              this.choosePlayForPlayer("paper");
            }}
          >
            Paper
          </button>
          <button
            className="RPS-button"
            onClick={() => {
              this.choosePlayForPlayer("scissors");
            }}
          >
            Scissors
          </button>
        </div>
      </div>
    );
  }
}
