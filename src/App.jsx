import { useState } from 'react'
import PedeFondo from './assets/pede_cortado.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={PedeFondo} className="logo" alt="Pede logo" />
        </a>
      </div>
      <h1>Pedemontana</h1>
      <h2>La cerveza subandina</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
