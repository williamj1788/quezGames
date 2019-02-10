import React from 'react';
var player = require("./Img/x.png");
var computer = require("./Img/BlueCircle.png");

export default class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: "none",
        }
        this.setActivetoPlayer = this.setActivetoPlayer.bind(this);
        this.setActivetoComputer = this.setActivetoComputer.bind(this);
        this.changeImg = this.changeImg.bind(this);
    }
    componentWillReceiveProps(){
        if(this.props.num === this.props.computerNum){
            if(this.state.active !== 'none'){
                this.props.onClick[0]();
            }else{
                this.setActivetoComputer();
            }
        }
    }
    
    setActivetoPlayer(){
        if(this.state.active === "none"){
            this.setState({
                active: "player"
            });
            this.props.onClick[1]();
            this.props.onClick[0]();
            console.log("Set Player");
        }
    }
    setActivetoComputer(){
        this.setState({
            active: "computer"
        });
        this.props.onClick[1]();
    }
    changeImg(){
        switch(this.state.active){
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
    
    render(){
        return(
            <div className="square" id={"square"+ this.props.num} style={{backgroundImage: "url(" + this.changeImg() + ")"}} onClick={this.setActivetoPlayer}>
                
            </div>
        )
    }
}