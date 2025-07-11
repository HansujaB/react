import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  //let counter =0

  //control over ui updation ->
  const addValue=() => {
    //counter+=1
    setCounter(counter+1)
  }

  const removeValue=() => {
    if(counter>0){
      setCounter(counter-1)
    }
  }


  return (
    <>
      <h1>Counter: React at 4am</h1>
      <h2>Counter value :{counter}</h2>
      <button onClick={addValue}>Add Value </button>
      <br/>
      <button onClick={removeValue}>Remove Value </button>
    </>
  )
}

export default App
