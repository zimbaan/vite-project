import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home.jsx'
import HomeClass from './components/homeclass.jsx'
import AboutClass from './components/AboutClass'
import About from './components/about'
import LifeCycleComponent from './components/LifeCycleComponent'
import RenderingComponent from './components/RenderingComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AboutClass name="App Component" work="Parent Component" />
     <About name="App Component" work="Parent Component" />
     <LifeCycleComponent name="App Component" />
     <RenderingComponent name="App Component" />
  
    </>
  ) 
}

export default App
