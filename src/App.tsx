import React from 'react'
import Router from "@/Components/router"
import './App.css'
import { UserContextProvider } from './Contexts/userContext'

function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  )
}

export default App
