import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Footer from './components/footer/footer.jsx'
import Header from './components/header/Header.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/user.jsx'


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

  },
  {
    path: "github/github_followers",
    element:<git
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Header />}>
//       <Route path="about" element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='footer' element={<Footer/>}/>
      
//     </Route>
//   )
// )




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

