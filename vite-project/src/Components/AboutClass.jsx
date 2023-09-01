import React, {Component} from "react";
class AboutClass extends Component{
    constructor(props){
        super(props)
        this.state={
            name:this.props.name,
            work:this.props.work,
            count:0
        }
    }
    ClickEvent(){
        console.log("hi")
        this.setState({
            name:"Varun",
            work:"Student",
            count:this.state.count+=1
        })
    }
    mouseOverEvent(){
        console.log("Mouse is hovered")
    }
    render(){
        return(
            <div>
                AboutClass
                <b>name:{this.state.name}</b><br></br>
                <b>name:{this.state.work}</b><br></br>
                <b>name:{this.state.count}</b><br></br>
                <button onClick={()=>this.ClickEvent()}
                onMouseOver={()=>this.mouseOverEvent()}>Click</button>
            </div>
        )
    }
}
export default AboutClass