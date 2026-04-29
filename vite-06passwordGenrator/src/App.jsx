import { useState,useCallback } from 'react'

import './App.css'

// useState is a hook that allows us to add state to our functional components. It returns an array with two elements: the current state value and a function to update it. We can use array destructuring to assign these values to variables. In this case, we are using useState to create a state variable called length and a function called setlength to update it. The initial value of length is set to 8.

function App() {
  const [length, setlength] = useState(8)
  const [password, setPassword] = useState("Generate Password")
  const [number, setNumber] = useState(false)
  const [char, setchar] = useState(false)
  
  const passwordGenerator = useCallback(() => {
    
    let pass=""
    let  str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    
    if (number) str += "1234567890"
    if (char) str += "~!@#$%^&*()"
    
    // Math.floor() returns the largest integer ≤ given number (it rounds down).// 4.7//  4
    
    for (let i = 0; i < length; i++){
      const Generatepassword = Math.floor(Math.random() * str.length  )

      pass +=str.charAt(Generatepassword)
    }
    setPassword(pass)


  }, [length, number, char])
    
  return (
    <>
      <div className='text 4-xl text center  text whitek '>
        <h1>Password Generator</h1>
        <div>
          <input type="text" value={password} readOnly />
          <button onClick={passwordGenerator}> Generatepassword</button>
          <button onClick={passwordGenerator}>number</button>

          <div className='flex text item gap x-2'>
            <input type='range'
              min={6}
              max={100}
              value={length}
              className='cursor point'
              onChange={(e) => setlength(Number(e.target.value))}
            />
            <label>length:{length }</label>
          </div>



        </div>

      </div>
    </>
  )
} 

export default App

