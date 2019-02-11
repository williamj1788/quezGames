import React from 'react';
import RPSPlayer from './RPSPlayer';

export default class RPSGame extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            player: {
                score: 0,
                play: "none"
            },
            computer: {
                score: 0,
                play: "none"
            }
        }
        this.choosePlayForPlayer = this.choosePlayForPlayer.bind(this);
        this.choosePlayForComputer = this.choosePlayForComputer.bind(this);
    }

    choosePlayForPlayer(play){
        this.setState({
            player: {
                score: this.state.player.score,
                play: play,
            }
        });
    }

    choosePlayForComputer(play){
        this.setState({
            computer: {
                score: this.state.computer.score,
                play: play,
            }
        });
    }
    
    render(){
        return(
            <div>
                <div id="RPS-container">
                    <RPSPlayer color={"#00ADF9"} player={"Player"} score={this.state.player.score} play={this.state.player.play} />
                    <div ><p id="RPS-winner">Winner</p></div>
                    <RPSPlayer color={"#FF0000"} player={"Computer"} score={this.state.computer.score} play={this.state.player.play} />
                </div>
                <div id="RPS-button-container">
                    <button className="RPS-button">Rock</button>
                    <button className="RPS-button">Paper</button>
                    <button className="RPS-button">Scissors</button>
                </div>
            </div>
        )
    }
}