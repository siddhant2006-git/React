import { useState } from 'react'
import './App.css'


function App() {

  let [counter, setCounter] = useState(15)

  const addvalue = () => {
    if (counter < 20) {
      setCounter(counter => counter + 1)
    }
    else {
      alert("value  is greater than 20")
    }
  }


  const removeValue = () => { 
    if (counter > 0) {
      setCounter(counter - 1)
    }
    else {
      alert("greater than 0")
    }
  }
  // useState - it is hook of react which can work store the value and update the ui formation


  return (
    <>
      <h1>chai with react </h1>
      <h2>counter value : {counter} </h2>

      <button onClick={addvalue} > add value </button>
      <br />
      <button onClick={removeValue} >remove value </button>
    </>
  )
}

export default App



