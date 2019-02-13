import React from 'react';

export default class GGGuessWord extends React.Component{
    render(){
        let wordChars = this.props.word[0].split('');
        wordChars = wordChars.map((item,index) => {
            let display = "hidden";
            if(this.props.word[1].indexOf(index) !== -1){
                display = "";
            }
            return <div className="GGGame-GuessWord-Character" key={item+index}><span style={{visibility: display}} >{item}</span></div>
        });
        return(
            <div className="GGGame-GuessWord-Container">
                {wordChars}
            </div>
        )
    }
}