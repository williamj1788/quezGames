import React from "react";

function GGInput({ onEnter, onClick, Guesses, Hints }) {
  function handleOnEnter(e) {
    if (e.keyCode === 13) {
      onEnter(e.target.value);
      e.target.value = "";
    }
  }

  return (
    <div className="GGGame-input-Container">
      <button className="GGGame-button Hint" onClick={onClick}>
        Hint: <span>{Hints}</span>
      </button>
      <input
        className="GGGame-input"
        type="text"
        placeholder="Guess the word"
        onKeyUp={handleOnEnter}
      />
      <button className="GGGame-button Guess">
        Guess: <span>{Guesses}</span>
      </button>
    </div>
  );
}

export default GGInput;
