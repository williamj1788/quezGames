import React from "react";

function GGGuessWord({ word }) {
  const [wordString, wordIndexArr] = word;
  return (
    <div className="GGGame-GuessWord-Container">
      {wordString.split("").map((char, i) => (
        <div className="GGGame-GuessWord-Character" key={i}>
          <span
            style={{
              visibility: wordIndexArr.indexOf(i) !== -1 ? "" : "hidden"
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
