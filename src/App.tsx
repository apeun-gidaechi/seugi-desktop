import { useState } from 'react'
import Router from "@/components/router"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router />
  )
}

export default App
