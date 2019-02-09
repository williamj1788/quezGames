import React from 'react';

export default class TTTGame extends React.Component{
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
                        <h1 className="title game">Tick Tack Toe</h1>
                        <button className="homeButton" type="button" onClick={this.handleOnClick}>Home</button>
                    </div>
                    <div style={{width: "400px", margin: "0 auto", paddingTop: "100px"}}>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <p className="computer">Computer: </p>
                            <p className="computer">score</p>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <p className="player">Player: </p>
                            <p className="player">score</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}