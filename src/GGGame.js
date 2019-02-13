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
            word: "some",
            GWords: [],
            hints: 4,
            Guesses: 10,
            wordIndex: [],
        }
        this.addToGWords = this.addToGWords.bind(this);
        this.getWordIndex = this.getWordIndex.bind(this);
        this.findIndenticalString = this.findIndenticalString.bind(this);
    }
    componentWillMount(){
        let number1 = getRandomInt(0, this.state.word.length);
        let number2 = getRandomInt(0, this.state.word.length);
        while(number1 === number2){
            number2 = getRandomInt(0, this.state.word.length);
        }
        this.setState({
            wordIndex: [number1,number2]
        });
    }
    addToGWords(word){
        if(this.state.Guesses > 0 && word.length > 0){
            let GWords = this.state.GWords;
            GWords.push([word, this.findIndenticalString(this.state.word,word)]);
            this.setState({
                GWords: GWords,
                Guesses: this.state.Guesses - 1, 
            }); 
        }
    }
    
    findIndenticalString(string1,string2){
        let string1Array = string1.toLowerCase().split('');
        let string2Array = string2.toLowerCase().split('');
        let count = 0;
        let tracker = [];
        // console.log(string1Array, string2Array);
        for(let element2 of string2Array){
            // console.log(element2);
            for(let element1 of string1Array){
                if(element1 === element2 && tracker.indexOf(element1) === -1){
                    tracker.push(element2);
                    console.log(element1,element2);
                    count++;
                    break;
                }
            }
        }
        console.log(count);
        return count;
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