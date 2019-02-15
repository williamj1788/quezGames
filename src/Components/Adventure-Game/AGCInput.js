import React from 'react';

export default class AGCInput extends React.Component{
    constructor(props){
        super(props);
        this.handeOnClick = this.handeOnClick.bind(this);
    }

    handeOnClick(option,node){
        this.props.onClick(option,node);
    }
    
    render(){
        let content = "space-around";
        let options = 'null';
        if(this.props.node !== ''){
            options = this.props.node.options;
            if(options !== 'null'){
                options = options.map((item,index) => {
                    return <button className="AGC-button" onClick={() => {this.handeOnClick(item,this.props.node)}} key={"button" + index}>{item.text}</button>
                });
            }
            content = options.length < 3 ? "space-around" : "space-between";
        }
        
        return(
            <div className="AGC-button-container" style={{justifyContent: content}}>
                {options}
            </div>
        )
    }
}