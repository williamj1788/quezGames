import React from 'react';
import Home from './Home';
import TTT from './TTT';
import RPS from './RPS';
import './TTTGameStyle.css';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayHome: true,
            displayTTT: false,
            displayAGC: false,
            displayGG: false,
            displayRPS: false,
        }
        this.displayHome = this.displayHome.bind(this);
        this.displayTTT = this.displayTTT.bind(this);
        this.displayAGC = this.displayAGC.bind(this);
        this.displayGG = this.displayGG.bind(this);
        this.displayRPS = this.displayRPS.bind(this);
    }
    displayHome(){
        this.setState({
            displayHome: true,
            displayTTT: false,
            displayAGC: false,
            displayGG: false,
            displayRPS: false,
        });
    }
    displayTTT(){
        this.setState({
            displayHome: false,
            displayTTT: true,
        });
    }
    displayAGC(){
        this.setState({
            displayHome: false,
            displayAGC: true,
        });
    }
    displayGG(){
        this.setState({
            displayHome: false,
            displayGG: true,
        });
    }
    displayRPS(){
        this.setState({
            displayHome: false,
            displayRPS: true,
        });
    }
    
    render(){
        return(
            <div>
                {this.state.displayHome && <Home toggleDisplays={[this.displayHome,this.displayTTT,this.displayAGC,this.displayGG,this.displayRPS]} />}
                {this.state.displayTTT && <TTT onClick={this.displayHome} />}
                {this.state.displayRPS && <RPS onClick={this.displayHome} />}
            </div>
        )
    }
}