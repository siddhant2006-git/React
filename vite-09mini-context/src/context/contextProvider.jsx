import React  from "react";

import Usercontext from "./Usercontext";


const UserContextProvider = (Children) => {
  return (
    <Usercontext.Provider value = {{ user, setuser }
}>
      const [user,setuser]=React.userstate(null)
      {Children}
    </Usercontext.Provider >


  )
}