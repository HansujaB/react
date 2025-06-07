import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let para="I am Learning react and i will finish learning it and work on projects in this week"
  return (
    <>
      <h1 className='text-shadow-gray-50 bg-blue-950 rounded-2xl p-4 mb-10' >Tailwind CSS</h1>
      <Card heading='chai aur code' para={para} />
      <Card heading='Finding the Journey to Mordor'/>
    </>
  )
}

export default App
