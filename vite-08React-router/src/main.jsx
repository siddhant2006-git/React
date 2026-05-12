import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Footer from './components/footer/footer.jsx'
import Header from './components/header/Header.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import Github from './components/github/github.jsx'
import Home from './components/Home/home.jsx'
import Root from './root.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

