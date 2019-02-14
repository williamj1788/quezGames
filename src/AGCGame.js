import React from 'react';
import AGCLog from './AGCLog';
import AGCInput from './AGCInput';

export default class AGCGame extends React.Component{
    render(){
        return(
            <div>
                <AGCLog />
                <AGCInput />
            </div>
        )
    }
}