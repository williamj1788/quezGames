import React from 'react';
export default class GGGuessedWord extends React.Component{
    
    
    
    render(){
        let words = this.props.Words;
        words = words.map((item,i) => {
            return <div className="GGGame-GuessedWords-Character" key={item+i}>{item[0] + "(" + item[1] + ")"}</div>
        });
        return(
            <div className="GGGame-GuessedWords-Container">
                <h3 className="GGGame-GuessedWords-title">You Have Tried</h3>
                {words}
            </div>
        )
    }
}