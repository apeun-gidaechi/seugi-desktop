import React from 'react'
import Router from "@/components/router"
import './App.css'
import { UserContextProvider } from './contexts/userContext'

function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  )
}

export default App
