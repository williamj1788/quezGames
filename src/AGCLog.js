import React from 'react';

export default class AGCLog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            log: this.props.text,
        }
    }
    
    shouldComponentUpdate(nextprops,nextstate){
        if(nextprops !== this.props && this.props.text !== 'null'){
            this.setState({
                log: this.state.log + '\n'+ nextprops.text,
            });
            return true;
        }else{
            return true;
        }
    }
    
    render(){
        return(
            <textarea className="AGC-log" value={this.state.log} readOnly></textarea>
        )
    }
}