import React, { Component } from 'react'

export class LifeCycleComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:""
      }
      
      console.log("Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps")
        return{
            name:props.name
        }
    }

    componentDidMount(){
        console.log("CDM")
    }

  render() {
    console.log("RENDER")
    return (
      <div>LifeCycleComponent {this.props.name}</div>
    )
  }
}

export default LifeCycleComponent;
