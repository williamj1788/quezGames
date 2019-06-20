import React from 'react';
import GGGuessWord from './GGGuessWord';
import GGGuessedWord from './GGGuessedWord';
import GGInput from './GGInput';
import keys from '../../key';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export default class GGGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "I'm Thinking Of A Word",
            word: "some",
            GWords: [],
            hints: 4,
            Guesses: 10,
            wordIndex: [],
        }
        this.addToGWords = this.addToGWords.bind(this);
        this.getWordIndex = this.getWordIndex.bind(this);
        this.findIndenticalString = this.findIndenticalString.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.getNewWordPromise = this.getNewWordPromise.bind(this);
        this.setState = this.setState.bind(this);
    }
    componentWillMount(){
        let promise = this.getNewWordPromise();
        let currentComponent = this;
        promise.then(callback);
        
        function callback(value){
            let number1 = getRandomInt(0, value.word.length);
            let number2 = getRandomInt(0, value.word.length);
            while(number1 === number2){
                number2 = getRandomInt(0, value.word.length);
            }
            currentComponent.setState({
                word: value.word,
                wordIndex: [number1,number2]
            }, (() => {console.log(value.word)})); 
        }
    }
    addToGWords(word){
        
        if(word.toLowerCase() === this.state.word.toLowerCase()){
            this.gameOver('winner');
        }else if(this.state.Guesses > 0){
            if(word.length > 0){
                let GWords = this.state.GWords;
                GWords.push([word, this.findIndenticalString(this.state.word,word)]);
                this.setState({
                    title: 'Try Again!',
                    GWords: GWords,
                    Guesses: this.state.Guesses - 1, 
                }); 
            }
        }else{
            this.gameOver('loser');
        }
        
        
    }
    getNewWordPromise(){
        return new Promise((resolve,reject) =>{
            let xhr = new XMLHttpRequest();
            let api = "https://wordsapiv1.p.mashape.com/words";
            let wordQuery = '/?lettersMax=10&random=true&limit=3&lettersMin=5';
            xhr.onload = () => {
                let data = JSON.parse(xhr.response);
                resolve(data);
            }
            xhr.open('GET',api + wordQuery,true);
            xhr.setRequestHeader("X-RapidAPI-Key", keys.WordAPIKey);
            xhr.send();
        })
    }

    gameOver(decide){
        let currentComponent = this;
        if(decide === 'winner'){
            let promise = this.getNewWordPromise();
            promise.then(callback);
            function callback(value){
                let number1 = getRandomInt(0, value.word.length);
                let number2 = getRandomInt(0, value.word.length);
                while(number1 === number2){
                    number2 = getRandomInt(0, value.word.length);
                }
                currentComponent.setState({
                    title: "That was the correct word",
                    GWords: [],
                    hints: 4,
                    Guesses: 10,
                    word: value.word,
                    wordIndex: [number1,number2]
                });  
            }
        }else{
            let promise = this.getNewWordPromise();
            promise.then(callback);
            function callback(value){
                let number1 = getRandomInt(0, value.word.length);
                let number2 = getRandomInt(0, value.word.length);
                while(number1 === number2){
                    number2 = getRandomInt(0, value.word.length);
                }
                currentComponent.setState({
                    title: "Out of Guesses! The Right Word Was: " + currentComponent.state.word,
                    GWords: [],
                    hints: 4,
                    Guesses: 10,
                    word: value.word,
                    wordIndex: [number1,number2]
                });  
            }
        }
    }
    
    findIndenticalString(string1,string2){
        let string1Array = string1.toLowerCase().split('');
        let string2Array = string2.toLowerCase().split('');
        let count = 0;
        let tracker = [];
        for(let element2 of string2Array){
            for(let element1 of string1Array){
                if(element1 === element2 && tracker.indexOf(element1) === -1){
                    tracker.push(element2);
                    count++;
                    break;
                }
            }
        }
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
                <h2 className="GGGame-title">{this.state.title}</h2>
                <GGGuessWord word={[this.state.word,this.state.wordIndex]}/>
                <GGGuessedWord Words={this.state.GWords}/>
                <GGInput onEnter={this.addToGWords} Guesses={this.state.Guesses} Hints={this.state.hints} onClick={this.getWordIndex} />
            </div>
        )
    }
}