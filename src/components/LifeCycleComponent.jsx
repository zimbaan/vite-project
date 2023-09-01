import React, { Component } from 'react'
 class LifeCycleComponent extends Component {
    constructor(props){
        console.log("Constructor called.")
        super(props)
        this.state = { name: "" }
    }
    static getDerivedStateFromProps(props,state){
        console.log("State is updated with props")
        return{ name: props.name }
        //return null
    }   
    componentDidMount(){ console.log("Mounted") }
    shouldComponentUpdate(){
        console.log("Component should update.")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Previous state and props")
        console.log(prevProps,prevState)
        return null
    }
    componentDidUpdate(){
        console.log("Component updated.")
    }
    clickEvent(){
        console.log("Click event")
        this.setState({
            name: "Update Lifecycle"
        })
    }
    render() {
    console.log("Render is updated.")
    return (
      <>
      <div>LifeCycle: {this.state.name}</div>
      <button onClick={() => this.clickEvent()}>update</button>
      </>
    )
    }
}

export default LifeCycleComponent