import React from 'react';
/* <div className="GGGame-GuessedWords-Character">Word</div> */
export default class GGGuessedWord extends React.Component{
    
    
    
    render(){
        let words = this.props.Words;
        words = words.map((item) => {
            return <div className="GGGame-GuessedWords-Character" key={item+1}>{item}</div>
        });
        return(
            <div className="GGGame-GuessedWords-Container">
                <h3 className="GGGame-GuessedWords-title">You Have Tried</h3>
                {words}
            </div>
        )
    }
}