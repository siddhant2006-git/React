import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const myobject = {
    username: "siddhant",
    age:21
  }



  return (
    <>
      <h1 className='bg-green-900'>tailwind test</h1>

      <Card username="siddhant" />
      <Card channel="chai aur code " someobject={myobject}></Card>

      
      
    
    </>
  )
}

export default App





