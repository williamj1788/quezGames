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
        if(option.altText){
            let nodes = this.state.nodes;
            let index1 = nodes.indexOf(node);
            let index2 = nodes[index1].options.indexOf(option);
            nodes[index1].options.splice(index2,1);
            if(option.modifier){
                if(option.modifier === 'drunk'){
                    nodes[nodes.indexOf(this.findNode('11'))].natText = "You somehow manage to get an audience with the king, but you drunkness affends hims. he orders your immediated execution. Your death was quick";
                    this.setState({
                        log: this.state.log + '\n\n'+ option.altText,
                        nodes: nodes,
                    });
                }
            }else{
                this.setState({
                    log: this.state.log + '\n\n'+ option.altText,
                    nodes: nodes,
                });
            }
        }
        if(option.dest){
            if(option.dest === 'start'){
                let promise = this.getNodes();
                promise.then((nodes) => {
                    this.setState({
                        nodes: nodes,
                        log: nodes[0].natText,
                        currentNode: 'start',
                    });
                });
            }else{
                this.setState({
                    currentNode: option.dest,
                    log: this.state.log + '\n\n'+ this.findNode(option.dest).natText,
                });
            }
        }
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