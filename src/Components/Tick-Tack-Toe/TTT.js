import React from 'react';
import TTTGame from './TTTGame';

export default class TTT extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            playerScore: 0,
            computerScore: 0,
            scoreTitle: "The Game Has Began!",
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.incrementPlayerScore = this.incrementPlayerScore.bind(this);
        this.incrementComputerScore = this.incrementComputerScore.bind(this);
        this.setScoreTitle = this.setScoreTitle.bind(this);
    }
    
    incrementPlayerScore(){
        this.setState({
            playerScore: this.state.playerScore + 1,
            scoreTitle: "The Player Has Won!"
        });
    }
    
    incrementComputerScore(){
        this.setState({
            computerScore: this.state.computerScore + 1,
            scoreTitle: "The Computer Has Won!"
        });
    }
    setScoreTitle(){
        this.setState({
            scoreTitle: "There Was A Tied",
        });
    }
    
    handleOnClick(){
        this.props.onClick();
    }
    
    render(){
        return(
            <div id="main">
                <div id="container">
                    <div className="titleBar">
                        <h1 className="title game">Tick Tack Toe</h1>
                        <button className="homeButton" type="button" onClick={this.handleOnClick}>Home</button>
                    </div>
                    <div id="score-container">
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <p className="computer">Computer: </p>
                            <p className="computer">{this.state.computerScore}</p>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <p className="player">Player: </p>
                            <p className="player">{this.state.playerScore}</p>
                        </div>
                    </div>
                    <h3 id="score-title">{this.state.scoreTitle}</h3>
                    <TTTGame addScore={[this.incrementComputerScore,this.incrementPlayerScore,this.setScoreTitle]} />
                </div>
            </div>
        )
    }
}