import React, {Component} from 'react';

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
    console.log("Click Event Occurs..")
    this.setState({
      name:"Kapil",
      work:"student",
      count:this.state.count+=1
    })
  }
  mouseOverEvent(){
    console.log("MOUSE IS HOVERED")
  }


  render(){

    //this.state.name = "About Class Components"
    return (
      <div>AboutClass
        <br></br>
        <b>Name: {this.state.name}</b><br></br>
        <b>Work: {this.state.work}</b><br></br>
        <b>count :{this.state.count}</b>

        <input onChange ={(event) => {

        }}></input>
        <button onClick={() =>this.ClickEvent()} 
        onMouseOver={()=>this.mouseOverEvent()}>Click</button>

      </div>
    )
  }
}


export default AboutClass


