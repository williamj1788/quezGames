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
        this.findCurrentNode = this.findCurrentNode.bind(this);
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


    
    switchCurrentNode(option){
        if(option.altText){
            let nodes = this.state.nodes;
            let location = 0;
            nodes = nodes.filter(item => {
                item.options.forEach((optionTemp,index) => {
                    if(optionTemp.altText === option.altText){
                        location = index;
                        return true;
                    }else{
                        return false;
                    }
                });
            })[0];
            

            this.setState({
                log: this.state.log + '\n\n'+ option.altText,
            });
        }
        if(option.dest){
            this.setState({
                currentNode: option.dest,
            });
        }
        if(option.modifier){
            this.callModifier(option,option.modifier);
        }
    }
    callModifier(modifier){
        console.log(modifier);
        let nodes = this.state.nodes;
        nodes = nodes.filter(item => {
            
            if(item.options === id){
                return true;
            }else{
                return false;
            }
        });
    }

    findCurrentNode(id,type){
        let nodes = this.state.nodes;
        nodes = nodes.filter(item => {
            if(item.id === id){
                return true;
            }else{
                return false;
            }
        });
        if(nodes.length > 1){
            alert("We Found more than one node. See console for details");
            console.log(nodes);
        }else if(nodes.length === 0){
            if(type === 'text'){
                return '';
            }else{
                return 'null'
            }
        }else if(type === 'text'){
            return nodes[0].natText;
        }else if(type === 'options'){
            return nodes[0].options;
        }
        
    }

    render(){
        return(
            <div>
                <AGCLog text={this.state.log}/>
                <AGCInput options={this.findCurrentNode(this.state.currentNode,'options')} onClick={this.switchCurrentNode}/>
            </div>
        )
    }
}