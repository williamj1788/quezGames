import React from "react";

function GGGuessedWord({ word, guessedWords }) {
  function findIdenticalString(guessedWord) {
    const mapA = {};
    const mapB = {};
    for (let char of word.toLowerCase()) {
      mapA[char] = mapA[char] ? mapA[char] + 1 : 1;
    }

    for (let char of guessedWord.toLowerCase()) {
      mapB[char] = mapB[char] ? mapB[char] + 1 : 1;
    }

    let count = 0;
    for (let char of Object.keys(mapA)) {
      if (mapA[char] && mapB[char]) {
        count += mapA[char] < mapB[char] ? mapA[char] : mapB[char];
      }
    }

    return count;
  }

  return (
    <div className="GGGame-GuessedWords-Container">
      <h3 className="GGGame-GuessedWords-title">You Have Tried</h3>
      {guessedWords.map((gWord, i) => (
        <div className="GGGame-GuessedWords-Character" key={i}>
          {`${gWord} (${findIdenticalString(gWord)})`}
        </div>
      ))}
    </div>
  );
}

export default GGGuessedWord;
