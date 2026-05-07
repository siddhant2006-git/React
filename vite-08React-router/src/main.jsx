import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Footer from './components/footer/footer.jsx'
import Header from './components/header/Header.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'


const router = createBrowserRouter([
  {
    path: `/`,
    element: <Header />

  },
  {
    path: "Footer",
    element: <Footer />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "contact",
    element:<Contact/>

  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

