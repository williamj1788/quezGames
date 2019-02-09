import React from 'react';
var bg = require("./Img/x.png");

export default class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: "none",
        }
    }
    
    render(){
        return(
            <div className="square" style={{backgroundImage: "url(" + bg + ")"}}>
                s
            </div>
        )
    }
}