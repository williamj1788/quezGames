import React from 'react';

export default class TTTGame extends React.Component{
    render(){
        return(
            <div id="main">
                <div id="container">
                    <div className="titleBar">
                        <h1 className="title game">Tick Tack Toe</h1>
                        <button className="homeButton" type="button">Home</button>
                    </div>
                    <div style={{width: "fit-content", margin: "0 auto", paddingTop: "20px"}}>
                        <p className="computer">Computer:</p>
                        <p className="computer"> score</p>
                    </div>
                </div>
            </div>
        )
    }
}