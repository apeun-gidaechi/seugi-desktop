import { useState } from 'react'
import Router from "../src/components/router"
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router />
  )
}

export default App
