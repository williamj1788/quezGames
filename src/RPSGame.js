import React from 'react';
import RPSPlayer from './RPSPlayer';

export default class RPSGame extends React.Component{
    render(){
        return(
            <div id="RPS-container">
                <RPSPlayer />
                <div>Hello World</div>
                <div>Hello World</div>
            </div>
        )
    }
}