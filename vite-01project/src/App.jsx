
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Ecommercesites from './components/websites'

function App() {
  return (
    <div>
      <h1>react with coder </h1>
      <Ecommercesites name="siddhant" city="sambhal" />
      <img src={heroImg} className="base" width="170" height="179" alt="" />
      <img src={reactLogo} className="framework" alt="React logo" />
      <img src={viteLogo} className="vite" alt="Vite logo" />
    </div>
  )

}

export default App
