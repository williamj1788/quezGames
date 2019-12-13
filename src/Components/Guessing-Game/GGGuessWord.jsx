import React from "react";

function GGGuessWord({ word, charToShow }) {
  return (
    <div className="GGGame-GuessWord-Container">
      {word.split("").map((char, i) => (
        <div className="GGGame-GuessWord-Character" key={i}>
          <span
            style={{
              visibility: charToShow.includes(i) ? "" : "hidden"
            }}
          >
            {char}
          </span>
        </div>
      ))}
    </div>
  );
}

export default GGGuessWord;
