import React from 'react';
import GGGuessWord from './GGGuessWord';

export default class GGGame extends React.Component{
    render(){
        return(
            <div>
                <h2 className="GGGame-title">I'm Thinking Of A Word</h2>
                <GGGuessWord />
                <div className="GGGame-GuessedWords-Container">
                    <h3 className="GGGame-GuessedWords-title">You Have Tried</h3>
                    <div className="GGGame-GuessedWords-Character">Word</div>
                    <div className="GGGame-GuessedWords-Character">Word</div>
                    <div className="GGGame-GuessedWords-Character">Word</div>
                    <div className="GGGame-GuessedWords-Character">Word</div>
                    <div className="GGGame-GuessedWords-Character">Word</div>
                    <div className="GGGame-GuessedWords-Character">Word</div>
                    <div className="GGGame-GuessedWords-Character">Word</div>
                    <div className="GGGame-GuessedWords-Character">Word</div>
                    <div className="GGGame-GuessedWords-Character">Word</div>
                    <div className="GGGame-GuessedWords-Character">Word</div>
                </div>
                <div className="GGGame-input-Container">
                    <button className="GGGame-button Hint">Hint: <span>0</span></button>
                    <input className="GGGame-input" type='text' placeholder="Guess the word" />
                    <button className="GGGame-button Guess">Guess: <span>0</span></button>
                </div>
            </div>
        )
    }
}