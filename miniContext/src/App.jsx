import { useState } from 'react'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
function App() {
  return (
    <UserContextProvider>
      <h2> lets polish our react skills</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
