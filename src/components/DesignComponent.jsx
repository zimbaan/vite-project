import React, { Component } from 'react'

export class DesignComponent extends Component {
  
  constructor(props){
    super(props)

    this.state ={
      btnstyle  :{
        width:'100px',
        height:'25px',
        
      }
    }
  }
  
  render() {
    return (
      <div>DesignComponent</div>
    )
  }
}

export default DesignComponent