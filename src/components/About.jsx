import React from 'react'


function ClickEvent(){
    console.log("Click Event Works...")
}
function About(props) {
  return (
    <div>About
      <br></br>
      <b>name :{props.name}</b><br></br>
      <b>work :{props.work}</b><br></br>
      <button onclick={() => ClickEvent() }
      >Click</button>
    </div>
  )
}

export default About