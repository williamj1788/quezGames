import React from 'react';
import TTTGame from './TTTGame';

export default class TTT extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            playerScore: 0,
            computerScore: 0,
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.incrementPlayerScore = this.incrementPlayerScore.bind(this);
        this.incrementComputerScore = this.incrementComputerScore.bind(this);
    }
    
    incrementPlayerScore(){
        this.setState({
            playerScore: this.state.playerScore + 1,
        });
    }
    
    incrementComputerScore(){
        this.setState({
            computerScore: this.state.computerScore + 1,
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
                    <div style={{width: "400px", margin: "0 auto", paddingTop: "50px"}}>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <p className="computer">Computer: </p>
                            <p className="computer">{this.state.computerScore}</p>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <p className="player">Player: </p>
                            <p className="player">{this.state.playerScore}</p>
                        </div>
                    </div>
                    <TTTGame addScore={[this.incrementComputerScore,this.incrementPlayerScore]} />
                </div>
            </div>
        )
    }
}