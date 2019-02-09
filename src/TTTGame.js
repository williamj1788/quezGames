import React from 'react';
import Square from './square';

export default class TTTGame extends React.Component{
    render(){
        return(
            <div id="TTTGrid">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
        )
    }
}