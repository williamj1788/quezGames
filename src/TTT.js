import React from 'react';
import TTTGame from './TTTGame';

export default class TTT extends React.Component{
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
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
                            <p className="computer">Score</p>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <p className="player">Player: </p>
                            <p className="player">Score</p>
                        </div>
                    </div>
                    <TTTGame />
                </div>
            </div>
        )
    }
}