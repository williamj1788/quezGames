import React from 'react';
import AGCLog from './AGCLog';
import AGCInput from './AGCInput';

export default class AGCGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentNode: '1',
            nodes:[
                {
                    id: '1',
                    natText: 'You are alone',
                    options: [
                        {
                            text: 'fight',
                            dest: '11'
                        },
                        {
                            text: 'Run',
                            dest: '12'
                        },
                        {
                            text: 'Just die',
                            dest: '13'
                        },
                    ]
                },
                {
                    id: '11',
                    natText: 'You fought and died',
                    options: [
                        {
                            text: 'awake up',
                            dest: '111'
                        },
                        {
                            text: 'stay died',
                            dest: '112'
                        },
                        {
                            text: 'eat',
                            dest: '113'
                        },
                    ]
                }
            ]
        }
        this.switchCurrentNode = this.switchCurrentNode.bind(this);
        this.findCurrentNode = this.findCurrentNode.bind(this);
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