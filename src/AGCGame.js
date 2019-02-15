import React from 'react';
import AGCLog from './AGCLog';
import AGCInput from './AGCInput';

export default class AGCGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentNode: 'start',
            nodes: [],
            log: ''
        }
        this.switchCurrentNode = this.switchCurrentNode.bind(this);
        this.findNode = this.findNode.bind(this);
    }
    
    getNodes(){
        return new Promise((resolve,reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'Nodes.json',true);
            xhr.onload = () =>{
                resolve(JSON.parse(xhr.response).nodes);
            }
            xhr.send();
        })
    }

    componentDidMount(){
        let promise = this.getNodes();
        promise.then((nodes) => {
            this.setState({
                nodes: nodes,
                log: nodes[0].natText,
            });
        });
    }

    switchCurrentNode(option,node){
        
        let nodes = this.state.nodes;
        let log = this.state.log;
        let currentNode = this.state.currentNode;
        
        let index1 = nodes.indexOf(node);
        let index2 = nodes[index1].options.indexOf(option);
        
        if(option.altText){
            nodes[index1].options.splice(index2,1);
            log += '\n\n'+ option.altText;
        }
        if(option.modifier){
            if(option.modifier === 'drunk'){
                nodes[nodes.indexOf(this.findNode('11'))].natText = "You somehow manage to get an audience with the king, but you drunkness affends hims. he orders your immediated execution. Your death was quick";
                nodes[nodes.indexOf(this.findNode('12'))].options[1] = {
                    text: "Buy the medium boat",
                    altText: "You spent too much money at the tavern and cant afford the ship",
                };
            }else if(option.modifier === 'mauled'){
                nodes[nodes.indexOf(this.findNode('2'))].natText = "By some merical, you manage to fend of the bear, but you are wonnded in the processes.";
                nodes[nodes.indexOf(this.findNode('2'))].options.splice(0,1);
                nodes[nodes.indexOf(this.findNode('22'))].natText = "You find a random wolf. Since you are already badly wound, it makes quick work of you. maybe going into the woods was a bad idea."
            }
        }
        if(option.dest){
            if(option.dest === 'start'){
                let promise = this.getNodes();
                promise.then((value) => {
                    this.setState({
                        nodes: value,
                        log: nodes[0].natText,
                        currentNode: 'start',
                    });
                });
                return
            }else{
                currentNode = option.dest;
                log += '\n\n'+ this.findNode(option.dest).natText;
            }
        }
        this.setState({
            nodes: nodes,
            currentNode: currentNode,
            log: log,
        });
    }

    findNode(id){
        let nodes = this.state.nodes;
        if(nodes.length !== 0){
            console.log();
            nodes = nodes.filter(item => {
                if(item.id === id){
                    return true;
                }else{
                    return false;
                }
            });
            return nodes[0];
        }else{
            return '';
        }
        
    }

    render(){
        return(
            <div>
                <AGCLog text={this.state.log}/>
                <AGCInput node={this.findNode(this.state.currentNode)} onClick={this.switchCurrentNode}/>
            </div>
        )
    }
}