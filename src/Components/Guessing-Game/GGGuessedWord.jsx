import React from "react";

function GGGuessedWord({ Words }) {
  return (
    <div className="GGGame-GuessedWords-Container">
      <h3 className="GGGame-GuessedWords-title">You Have Tried</h3>
      {Words.map((word, i) => (
        <div className="GGGame-GuessedWords-Character" key={i}>
          {`${word[0]} (${word[1]})`}
        </div>
      ))}
    </div>
  );
}

export default GGGuessedWord;
