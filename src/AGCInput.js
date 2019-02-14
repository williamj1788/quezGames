import React from 'react';

export default class AGCInput extends React.Component{
    constructor(props){
        super(props);
        this.handeOnClick = this.handeOnClick.bind(this);
    }

    handeOnClick(dest){
        this.props.onClick(dest);
    }
    
    render(){
        let options = this.props.options;
        if(options !== 'null'){
            options = options.map((item,index) => {
                return <button className="AGC-button" onClick={() => {this.handeOnClick(item.dest)}} key={"button" + index}>{item.text}</button>
            });
        }
        
        return(
            <div className="AGC-button-container">
                {options}
            </div>
        )
    }
}