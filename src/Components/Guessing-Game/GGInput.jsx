import React from "react";

function GGInput({ onEnter, onClick, guesses, hints }) {
  function handleOnEnter(e) {
    if (e.keyCode === 13 && e.target.value) {
      onEnter(e.target.value);
      e.target.value = "";
    }
  }

  return (
    <div className="GGGame-input-Container">
      <button className="GGGame-button Hint" onClick={onClick}>
        Hint: <span>{hints}</span>
      </button>
      <input
        className="GGGame-input"
        type="text"
        placeholder="Guess the word"
        onKeyUp={handleOnEnter}
      />
      <button className="GGGame-button Guess">
        Guess: <span>{guesses}</span>
      </button>
    </div>
  );
}

export default GGInput;
