import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Chai from './chai.jsx'

// const Reactelement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank"
//   },
//   Children: "click me google sites "
// }

// react element cannot access the object beacuse react can make  internal instruction .


// const  krish=
//   <a href="https://google.com" target="_blank" > 
//     visit google</a>

const anotheruser = "chai aur react"


const Reactelement = React.createElement(
  "a",
  { href: "https://github.com", target: "_blank" },
  "click the github",
  anotheruser
);



createRoot(document.getElementById('root')).render(

  Reactelement

)
