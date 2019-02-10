import React from 'react';

var rock = require("./Img/Rock.png");
var paper = require("./Img/Paper.png");
var scissors = require("./Img/sci.png");

export default class RPSPlayer extends React.Component{
    render(){
        return(
            <div id="RPS-player">
                <div className="score-div">
                    <span className="RPS-player-score">Score: </span>
                    <span className="RPS-player-score">Score</span>
                </div>
                <img className="RPS-imgs" src= {rock} />
                <p className="RPS-player-score" style={{textAlign: "center"}} >Draw</p>
            </div>
        )
    }
}