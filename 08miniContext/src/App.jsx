import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextprovider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Udibaba</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
