import React from 'react';
import Square from './square';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export default class TTTGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            computerNum: 0,
            numberOfSquaresActive: 0,
        }
        this.computerTurn = this.computerTurn.bind(this);
        this.incrementNumberOfSquaresActive = this.incrementNumberOfSquaresActive.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.state.computerNum === nextState.computerNum){
            return false;
        }
        return true;
    }
    
    computerTurn(){
        console.log("Old number is: " + this.state.computerNum);
        this.setState({
            computerNum: getRandomInt(1, 10)
        });
        console.log("new Number is: " + this.state.computerNum);
    }
    incrementNumberOfSquaresActive(){
        this.setState({
            numberOfSquaresActive: this.state.numberOfSquaresActive + 1,
        });
        console.log("State incremetned");
    }

    
    render(){
        console.log('Number of active squares: ' + this.state.numberOfSquaresActive);
        return(
            <div id="TTTGrid">
                <Square num={1} computerNum={this.state.computerNum} onClick={[this.computerTurn,this.incrementNumberOfSquaresActive]} />
                <Square num={2} computerNum={this.state.computerNum} onClick={[this.computerTurn,this.incrementNumberOfSquaresActive]} />
                <Square num={3} computerNum={this.state.computerNum} onClick={[this.computerTurn,this.incrementNumberOfSquaresActive]} />
                <Square num={4} computerNum={this.state.computerNum} onClick={[this.computerTurn,this.incrementNumberOfSquaresActive]} />
                <Square num={5} computerNum={this.state.computerNum} onClick={[this.computerTurn,this.incrementNumberOfSquaresActive]} />
                <Square num={6} computerNum={this.state.computerNum} onClick={[this.computerTurn,this.incrementNumberOfSquaresActive]} />
                <Square num={7} computerNum={this.state.computerNum} onClick={[this.computerTurn,this.incrementNumberOfSquaresActive]} />
                <Square num={8} computerNum={this.state.computerNum} onClick={[this.computerTurn,this.incrementNumberOfSquaresActive]} />
                <Square num={9} computerNum={this.state.computerNum} onClick={[this.computerTurn,this.incrementNumberOfSquaresActive]} />
            </div>
        )
    }
}