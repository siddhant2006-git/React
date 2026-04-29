
import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";


// useState is a hook that allows us to add state to our functional components. It returns an array with two elements: the current state value and a function to update it. We can use array destructuring to assign these values to variables. In this case, we are using useState to create a state variable called length and a function called setlength to update it. The initial value of length is set to 8.

// useCallback- is a hook of react which are used to memorysis to the functional component which are held all  to  the function (all memory store )
// useeffect - is a hook of react which are used only setmemory to held to th4e function (set memory store )

function App() {
  const [length, setlength] = useState(8);
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [char, setchar] = useState(false);

  
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str =
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    if (number) str += "1234567890";
    if (char) str += "~!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, number, char]); // ✅ fixed

  // copypaste to the clipboard 
  
  const copyPasteText = useCallback(() => {
    navigator.clipboard.writeText(password);
    passwordRef.current?.select(); // optional: auto select
  }, [password]);

  // useeffect- to set the value only in the function 

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="text-4xl text-center">
      <h1>Password Generator</h1>

      <input
        type="text"
        value={password}
        readOnly
        ref={passwordRef}
      />
      <button onClick={copyPasteText}>copy</button>

      <div>
        <button onClick={passwordGenerator}>Generatepassword</button>

        <input
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => setlength(Number(e.target.value))}
        />
        <label>length:{length}</label>

        <div>
          <input
            type="checkbox"
            checked={number}
            id="numberInput"
            onChange={() => setNumber((prev) => !prev)}
          />
          <label htmlFor="numberInput">NumberInput</label>
        </div>

        <div>
          <input
            type="checkbox"
            checked={char}
            id="charInput"
            onChange={() => setchar((prev) => !prev)}
          />
          <label htmlFor="charInput">CharInput</label>
        </div>
      </div>
    </div>
  );
}

export default App;