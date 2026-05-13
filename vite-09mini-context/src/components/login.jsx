import React, { useContext, useState } from 'react'
import Usercontext from '../context/Usercontext'


function login() {

  const [user, setuser] = useState('')
  const [password, setpassword] = useState('')
  
  const { setUser } = useContext(Usercontext)
  


  const Onhandler = (e) => {
    e.preventDefault()
    setUser({ username: user, password })
    

  }


  return (
    <div>
      <h2>login</h2>
      <input type="text"
        value={user} onChange={(e)=>setuser(e.target.value)} placeholder="Username" />
      <input type="text"
        value={password} onChange={(e) => setpassword(e.target.value)}  placeholder='password' />
      <button onClick={Onhandler}> submit</button>
    </div>
  )
}

export default login