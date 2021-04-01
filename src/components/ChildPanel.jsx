import React, { Component } from 'react'
import '../css/ChildPanel.css'

class ChildPanel extends Component{
    constructor(props){
        super(props);
        this.state = {stopColor:false};
        console.log("props:",props);
        this.click_Event = this.click_Event.bind(this);
    }
    click_Event(event){
        console.log("click",event);
        this.setState((prevState,props)=>({stopColor:!prevState.stopColor}));
    }
    handleMove=(event)=>{
        this.props.onCapturarRaton(event);
    }
    render(){
        return(<div className="child-color" 
                style={this.state.stopColor?/*{backgroundColor:"#444"}*/
                        this.handleMove:
                        this.props.style}//.backgroundColor.replace("#","").split("").reverse().join()}
                onClick={this.click_Event}/>);
    }
}
export default ChildPanel;