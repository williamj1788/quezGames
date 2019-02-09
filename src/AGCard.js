import React from 'react';

export default class TTTCard extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.onClick();
    }
    
    render(){
        return(
            <div className="AG card" onClick={this.handleClick}>
                <h3 className="card-title">Adventure Game</h3>
                <h3 className="card-description">Play a text based adventure game</h3>
            </div>
        )
    }
}