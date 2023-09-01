import React, { Component } from 'react'

export class UpdateLifeCycle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:""
      }
    }

    getDerivedStateFromProps(props,state){
        this.setState({
            name:props.name
        })
        console.log("State is updated with props")
    }

    shouldComponentUpdate(){
        console.log("COMPONENT SHOULD UPDATE")
        return true;
    }

    componentDidMount(){
        console.log("COMPLETE MOUNT")
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("PREVIOUS STATE AND PROPS")
        console.log(prevprops,prevstate)
        return null
    }

    componentDidUpdate()
    {
        console.log("Component Updated")
    }

    clickEvent()
    {
        console.log("CLICKED")
        this.setState({
            name:"UPDATED"
        })
    }

  render() {
    console.log("RENDER")
    return (
      <><div>UpdateLifeCycle {this.state.name}</div>
      <button onClick={() => this.clickEvent()}>Update</button></>
    )
  }
}

export default UpdateLifeCycle;