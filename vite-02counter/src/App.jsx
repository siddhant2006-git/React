import { useState } from 'react'
import './App.css'


function App() {
  let counter = 15;
  
  const  addvalue = () => {

    console.log("clicked", counter)
    counter=counter+1
  }
  


  return (
    <>
      <h1>chai with react </h1>
      <h2>counter value : {counter} </h2>

      <button onClick={addvalue} > add value </button>
      <br/>
      <button>remove value </button>
    </>
  )
}

export default App 



