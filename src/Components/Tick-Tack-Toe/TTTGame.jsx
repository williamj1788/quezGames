import React, { useState, useEffect } from "react";
import Square from "./square";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function TTTGame({ declareWinner }) {
  const [gameBoard, setGameBoard] = useState([
    ["empty", "empty", "empty"],
    ["empty", "empty", "empty"],
    ["empty", "empty", "empty"]
  ]);
  const [isComputerThinking, setIsComputerThinking] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }
    if (isWinner("player")) {
      declareWinner("player");
      resetBoard();
      return;
    }
    if (isWinner("computer")) {
      declareWinner("computer");
      resetBoard();
      return;
    }
    if (isWinner("tie")) {
      declareWinner("tie");
      resetBoard();
      return;
    }
    if (isPlayerTurn) {
      setIsPlayerTurn(false);
      computerTurn();
      return;
    }
    setIsPlayerTurn(true);
  }, [gameBoard]);

  function isWinner(value) {
    if (value === "tie") {
      return (
        gameBoard
          .map(arr => arr.filter(posState => posState !== "empty"))
          .reduce((acc, arr) => acc + arr.length, 0) >= 9
      );
    }

    for (let i = 0; i < 3; i++) {
      if (gameBoard[i].every(posState => posState === value)) {
        return true;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (gameBoard.every(arr => arr[i] === value)) {
        return true;
      }
    }

    if (
      gameBoard.every((arr, i) => arr[i] === value) ||
      gameBoard.every((arr, i) => arr[2 - i] === value)
    ) {
      return true;
    }

    return false;
  }

  function computerTurn() {
    setIsComputerThinking(true);

    function findAvailablePosition() {
      const positionX = getRandomInt(0, 3);
      const positionY = getRandomInt(0, 3);

      if (gameBoard[positionX][positionY] !== "empty") {
        return findAvailablePosition();
      }

      setGameBoardPosition(positionX, positionY, "computer");
      setIsComputerThinking(false);
    }

    const thinkingTime = 500;

    setTimeout(findAvailablePosition, thinkingTime);
  }

  function onPositionClick(positionX, positionY) {
    return () => {
      if (isComputerThinking) {
        return;
      }
      if (gameBoard[positionX][positionY] !== "empty") {
        return;
      }
      setGameBoardPosition(positionX, positionY, "player");
    };
  }

  function setGameBoardPosition(positionX, positionY, value) {
    setGameBoard(board => {
      board = [...board]; // can't just mutate board because react won't render
      board[positionX][positionY] = value;
      return board;
    });
  }

  function resetBoard() {
    setGameBoard([
      ["empty", "empty", "empty"],
      ["empty", "empty", "empty"],
      ["empty", "empty", "empty"]
    ]);
  }

  return (
    <div id="TTTGrid">
      {[...gameBoard[0], ...gameBoard[1], ...gameBoard[2]].map(
        (positionState, i) => (
          <Square
            key={i}
            positionState={positionState}
            onClick={onPositionClick(Math.floor(i / 3), i % 3)}
          />
        )
      )}
    </div>
  );
}

export default TTTGame;
