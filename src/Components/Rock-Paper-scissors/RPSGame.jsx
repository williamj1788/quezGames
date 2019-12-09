import React, { useState, useEffect } from "react";
import RPSPlayer from "./RPSPlayer";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function RPSGame() {
  const [player, setPlayer] = useState({
    score: 0,
    play: "none"
  });
  const [computer, setComputer] = useState({
    score: 0,
    play: "none"
  });
  const [gameTitle, setGameTitle] = useState({
    text: "Let's begin!",
    color: "#000000"
  });
  const [isComputerThink, setIsComputerThink] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(true);

  useEffect(() => {
    if (playerTurn) {
      return;
    }
    choosePlayForComputer();
  }, [player]);

  useEffect(() => {
    if (playerTurn || computer.play === "none") {
      return;
    }

    decideWhoWins();
  }, [computer]);

  function decideWhoWins() {
    if (player.play === computer.play) {
      return declareWinner("Draw");
    }

    const rules = {
      rock: {
        scissors: true,
        paper: false
      },
      paper: {
        rock: true,
        scissors: false
      },
      scissors: {
        paper: true,
        rock: false
      }
    };
    declareWinner(rules[player.play][computer.play] ? "Player" : "Computer");
  }

  function declareWinner(winner) {
    if (winner === "Player") {
      setPlayer({ ...player, score: player.score + 1 });
    }
    if (winner === "Computer") {
      setComputer({ ...computer, score: computer.score + 1 });
    }
    setGameTitle({
      text: winner === "Draw" ? "Draw!" : `${winner} Wins`,
      color: determineColor()
    });
    setPlayerTurn(true);

    function determineColor() {
      switch (winner) {
        case "Player":
          return "#00ADF9";
        case "Computer":
          return "#FF0000";
        case "Draw":
          return "#000000";
      }
    }
  }

  function choosePlayForComputer() {
    setIsComputerThink(true);
    setComputer({ ...computer, play: "none" });
    setGameTitle({ ...gameTitle, text: "" });

    setTimeout(() => {
      switch (getRandomInt(1, 4)) {
        case 1:
          setComputer({ ...computer, play: "rock" });
          break;
        case 2:
          setComputer({ ...computer, play: "paper" });
          break;
        default:
          setComputer({ ...computer, play: "scissors" });
      }
      setIsComputerThink(false);
    }, 200);
  }

  function handleOnClick(play) {
    if (!isComputerThink) {
      setPlayer({ ...player, play });
      setPlayerTurn(false);
    }
  }

  return (
    <div className="RPS-Game">
      <div id="RPS-container">
        <RPSPlayer
          color={"#00ADF9"}
          player={"Player"}
          score={player.score}
          play={player.play}
        />
        <div>
          <p id="RPS-winner" style={{ color: gameTitle.color }}>
            {gameTitle.text}
          </p>
        </div>
        <RPSPlayer
          color={"#FF0000"}
          player={"Computer"}
          score={computer.score}
          play={computer.play}
        />
      </div>
      <div id="RPS-button-container">
        <button className="RPS-button" onClick={() => handleOnClick("rock")}>
          Rock
        </button>
        <button className="RPS-button" onClick={() => handleOnClick("paper")}>
          Paper
        </button>
        <button
          className="RPS-button"
          onClick={() => handleOnClick("scissors")}
        >
          Scissors
        </button>
      </div>
    </div>
  );
}
export default RPSGame;
