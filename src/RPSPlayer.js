import React from 'react';

var rock = require("./Img/Rock.png");
var paper = require("./Img/Paper.png");
var scissors = require("./Img/sci.png");

export default class RPSPlayer extends React.Component{
    
    
    render(){
        return(
            <div id="RPS-player">
                <div className="score-div">
                    <span className="RPS-player-score" style={{color: this.props.color}}>{this.props.player + ":"} </span>
                    <span className="RPS-player-score" style={{color: this.props.color}}>{this.props.score}</span>
                </div>
                <img className="RPS-imgs" src= {rock} />
                <p className="RPS-player-score" style={{color: this.props.color, textAlign: "center"}}>{this.props.play}</p>
            </div>
        )
    }
}