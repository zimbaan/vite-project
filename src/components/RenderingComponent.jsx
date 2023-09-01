import React, { Component } from 'react'

export class RenderingComponent extends Component {

  constructor (props){
    super(props)

    this.state={
      text : "condition",
      show :false,
      fruits:["Apple","Orange","Grape","Mango","Apple"]
    }
  }

  changeShow(){
    this.setState({
      show: !this.state.show,
      
    })
  }
  render() {

    var variable =this.state.show ? 'Hide' : 'Show'
    return (
      
      <>
        <ul>
          {
            this.state.fruits.map((fruit,index) => {
              return <li key={index}>{fruit}</li>
            })
          }
        </ul>
        <div>RenderingComponent</div>
        {this.state.show && this.state.text}
        <button onClick={() => this.changeShow()}>{variable}</button>
        <button onClick={() => this.changeShow()}>{this.state.show  ? 'Hide': 'show'}</button>
      
      </>
      

      
    )
  }
}

export default RenderingComponent