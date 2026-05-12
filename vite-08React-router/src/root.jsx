import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/footer'
import Header from './components/header/Header'
// Outlet- is used to change the value between the header , inside the header 

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root