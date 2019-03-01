import React from 'react';
import player from '../Img/x.png';
import computer from '../Img/BlueCircle.png';

export default class Square extends React.Component{
    constructor(props){
        super(props);
        this.changeImg = this.changeImg.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    changeImg(){
        // console.log(this.props.SquareList);
        switch(this.props.SquareList){
            case "none":
                return "";
            case "player":
                return player;
            case "computer":
                return computer;
            default:
                return "";
        }
    }
    handleOnClick(){
        this.props.onClick(this.props.num);
    }
    
    render(){
        // console.log("Square has been updated");
        // console.log("Square has been updated" + this.changeImg());
        return(
            <div className="square" id={"square"+ this.props.num} style={{backgroundImage: "url(" + this.changeImg() + ")"}} onClick={this.handleOnClick}>
                
            </div>
        )
    }
}