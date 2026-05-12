import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet/>
      <h1 className='bg-blue-500 text-white p-4'> react-router </h1>
      <Footer />
    
    </>
  ) 
}

export default App
