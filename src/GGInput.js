import React from 'react';

export default class GGInput extends React.Component{
    constructor(props){
        super(props);
        this.handleOnEnter = this.handleOnEnter.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnEnter(e){
        if(e.keyCode === 13){
            this.props.onEnter(e.target.value);
        }
    }
    handleOnClick(){
        this.props.onClick();
    }
    
    render(){
        return(
            <div className="GGGame-input-Container">
                <button className="GGGame-button Hint" onClick={this.handleOnClick}>Hint: <span>{this.props.Hints}</span></button>
                <input className="GGGame-input" type='text' placeholder="Guess the word" onKeyUp={this.handleOnEnter} />
                <button className="GGGame-button Guess">Guess: <span>{this.props.Guesses}</span></button>
            </div>
        )
    }
}