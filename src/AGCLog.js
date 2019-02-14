import React from 'react';

export default class AGCLog extends React.Component{

    render(){
        return(
            <textarea className="AGC-log" value={this.props.text} readOnly></textarea>
        )
    }
}