import React from 'react';
import AGCLog from './AGCLog';
import AGCInput from './AGCInput';

export default class AGCGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentNode: 'start',
            nodes: [],
        }
        this.switchCurrentNode = this.switchCurrentNode.bind(this);
        this.findCurrentNode = this.findCurrentNode.bind(this);
    }
    
    getNodes(){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'Nodes.json',true);
        xhr.onload = () =>{
            this.setState({
                nodes: JSON.parse(xhr.response).nodes,
            });
        }
        xhr.send();
    }

    componentDidMount(){
        this.getNodes();
    }


    
    switchCurrentNode(dest){
        this.setState({
            currentNode: dest,
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
                <AGCLog text={this.findCurrentNode(this.state.currentNode,'text')}/>
                <AGCInput options={this.findCurrentNode(this.state.currentNode,'options')} onClick={this.switchCurrentNode}/>
            </div>
        )
    }
}