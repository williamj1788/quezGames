import React, { useState, useEffect, useRef } from "react";
import GGGuessWord from "./GGGuessWord";
import GGGuessedWord from "./GGGuessedWord";
import GGInput from "./GGInput";
import wordList from "./Words.json";

function GGGame() {
  const [title, setTitle] = useState("I'm thinking of a word");
  const [word, setWord] = useState("some");
  const [guessedWords, setGuessedWords] = useState([]);
  const [hints, setHints] = useState(0);
  const [guessesLeft, setGuessesLeft] = useState(0);
  const [charsToShow, setCharsToShow] = useState([]);

  useEffect(() => {
    (async () => {
      const newWord = getRandomWord();

      startGameWithWord(newWord);
    })();
  }, []);

  async function handleOnEnter(wordInput) {
    if (word.toLowerCase() === wordInput.toLowerCase()) {
      const newWord = getRandomWord();
      return startGameWithWord(newWord, "That was the correct word!");
    }
    if (guessesLeft <= 0) {
      const newWord = getRandomWord();
      startGameWithWord(newWord, `Out of Guesses! The right word was: ${word}`);
      return;
    }

    guessedWords.push(wordInput);
    setGuessedWords(guessedWords);
    setTitle("Try Again!");
    setGuessesLeft(guessesLeft - 1);
  }

  const pastWordIndex = useRef(null); // to guarantee we get a new word;
  function getRandomWord() {
    const { words } = wordList;
    const wordIndex = getRandomInt(0, words.length);
    while (wordIndex === pastWordIndex.current) {
      wordIndex = getRandomInt(0, words.length);
    }
    pastWordIndex.current = wordIndex;
    return words[wordIndex].toLowerCase();
  }

  function getTwoRandomNumbers(min, max) {
    let number1 = getRandomInt(min, max);
    let number2 = getRandomInt(min, max);
    while (number1 === number2) {
      number2 = getRandomInt(min, max);
    }
    return [number1, number2];
  }

  function startGameWithWord(word, title) {
    setWord(word);
    setHints(word.length >= 9 ? 4 : word.length - 5);
    setGuessedWords([]);
    setGuessesLeft(10);
    setCharsToShow(getTwoRandomNumbers(0, word.length));
    if (title) {
      setTitle(title);
    }
    console.log(`The word is: ${word}`); // for the people that want to cheat
  }

  function handleOnHintClick() {
    if (hints <= 0) {
      return;
    }
    let number = getRandomInt(0, word.length);
    if (charsToShow.includes(number)) {
      return handleOnHintClick();
    }
    charsToShow.push(number);
    setCharsToShow(charsToShow);
    setHints(hints - 1);
  }

  return (
    <div>
      <h2 className="GGGame-title">{title}</h2>
      <GGGuessWord charToShow={charsToShow} word={word} />
      <GGGuessedWord word={word} guessedWords={guessedWords} />
      <GGInput
        onEnter={handleOnEnter}
        guesses={guessesLeft}
        hints={hints}
        onClick={handleOnHintClick}
      />
    </div>
  );
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default GGGame;
