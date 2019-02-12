import React from 'react';
import GGGame from './GGGame';

export default class GG extends React.Component{
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
                        <h1 className="title game">Guessing Game</h1>
                        <button className="homeButton" type="button" onClick={this.handleOnClick}>Home</button>
                    </div>
                    <GGGame />
                </div>
            </div>
        )
    }
}