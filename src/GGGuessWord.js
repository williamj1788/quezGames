import React from 'react';

export default class GGGuessWord extends React.Component{
    render(){
        let wordChars = this.props.word.split('');
        wordChars = wordChars.map((item) => {
            return <div className="GGGame-GuessWord-Character" key={item+1}>{item}</div>
        });
        return(
            <div className="GGGame-GuessWord-Container">
                {wordChars}
            </div>
        )
    }
}