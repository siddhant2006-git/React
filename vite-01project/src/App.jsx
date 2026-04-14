import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import ProductList from './components/websites';

function App() {
  return (
    <div>
      <h1>React with coder</h1>

      <ProductList name="siddhant" city="sambhal" />

      <img src={heroImg} width="170" height="179" alt="" />
      <img src={reactLogo} alt="React logo" />
      <img src={viteLogo} alt="Vite logo" />
    </div>
  );
}

export default App;