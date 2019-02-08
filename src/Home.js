import React from 'react';
import './HomeStyle.css';

export default class Home extends React.Component{
    render(){
        return(
            <div id="main">
                <div id="container">
                    <h1 className="title">QuezGames</h1>
                    <h3 className="title-sub">Click To Play A Game</h3>
                    <div className="gameContainer">
                        
                    </div>
                </div>
            </div>
        )
    }
}