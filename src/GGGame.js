import React from 'react';
import GGGuessWord from './GGGuessWord';
import GGGuessedWord from './GGGuessedWord';
import GGInput from './GGInput';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export default class GGGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: "something",
            GWords: [],
            hints: 4,
            Guesses: 10,
            wordIndex: [],
        }
        this.addToGWords = this.addToGWords.bind(this);
        this.getWordIndex = this.getWordIndex.bind(this);
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
    
    getWordIndex(){
        if(this.state.hints > 0){
            let length = this.state.word.length;
            let wordI = this.state.wordIndex;
            let number = getRandomInt(0, length);
            if(wordI.indexOf(number) === -1){
                wordI.push(number);
                this.setState({
                    wordIndex: wordI,
                    hints: this.state.hints - 1,
                });
            }else{
                this.getWordIndex();
            } 
        }
        
    }
    
    render(){
        return(
            <div>
                <h2 className="GGGame-title">I'm Thinking Of A Word</h2>
                <GGGuessWord word={[this.state.word,this.state.wordIndex]}/>
                <GGGuessedWord Words={this.state.GWords}/>
                <GGInput onEnter={this.addToGWords} Guesses={this.state.Guesses} Hints={this.state.hints} onClick={this.getWordIndex} />
            </div>
        )
    }
}