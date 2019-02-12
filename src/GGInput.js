import React from 'react';

export default class GGInput extends React.Component{
    constructor(props){
        super(props);
        this.handleOnEnter = this.handleOnEnter.bind(this);
    }

    handleOnEnter(e){
        if(e.keyCode === 13){
            this.props.onEnter(e.target.value);
        }
    }
    
    render(){
        return(
            <div className="GGGame-input-Container">
                <button className="GGGame-button Hint">Hint: <span>0</span></button>
                <input className="GGGame-input" type='text' placeholder="Guess the word" onKeyUp={this.handleOnEnter} />
                <button className="GGGame-button Guess">Guess: <span>{this.props.Guesses}</span></button>
            </div>
        )
    }
}