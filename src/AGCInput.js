import React from 'react';

export default class AGCInput extends React.Component{
    constructor(props){
        super(props);
        this.handeOnClick = this.handeOnClick.bind(this);
    }

    handeOnClick(option){
        this.props.onClick(option);
    }
    
    render(){
        let options = this.props.options;
        if(options !== 'null'){
            options = options.map((item,index) => {
                return <button className="AGC-button" onClick={() => {this.handeOnClick(item)}} key={"button" + index}>{item.text}</button>
            });
        }
        let content = options.length < 3 ? "space-around" : "space-between";
        
        return(
            <div className="AGC-button-container" style={{justifyContent: content}}>
                {options}
            </div>
        )
    }
}