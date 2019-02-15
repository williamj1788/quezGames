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
            <div className="TTT card" onClick={this.handleClick}>
                <h3 className="card-title">Tick Tack Toe</h3>
                <h3 className="card-description">Play A Classic Game of Tick Tack Toe</h3>
            </div>
        )
    }
}