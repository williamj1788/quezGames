import React from 'react';
import GGGuessWord from './GGGuessWord';
import GGGuessedWord from './GGGuessedWord';
import GGInput from './GGInput';

export default class GGGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: "something",
            GWords: [],
            hints: 4,
            Guesses: 10,
        }
        this.addToGWords = this.addToGWords.bind(this);
    }

    addToGWords(word){
        if(this.state.Guesses > 0){
            let GWords = this.state.GWords;
            GWords.push(word);
            this.setState({
                GWords: GWords,
                Guesses: this.state.Guesses - 1, 
            }); 
        }
        
    }
    
    
    render(){
        return(
            <div>
                <h2 className="GGGame-title">I'm Thinking Of A Word</h2>
                <GGGuessWord word={this.state.word}/>
                <GGGuessedWord Words={this.state.GWords}/>
                <GGInput onEnter={this.addToGWords} Guesses={this.state.Guesses} />
            </div>
        )
    }
}