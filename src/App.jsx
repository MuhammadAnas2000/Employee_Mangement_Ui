import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Login/>
    </div>
  )
}

export default App