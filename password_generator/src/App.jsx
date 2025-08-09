import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
function App() {
  //useref use-> to take reference of anything
//useRef hook
  const passwordRef=useRef(null)
  const [length, setLength] = useState(8)
  const[number, setNumber]=useState(false)
  const[char, setChar]=useState(false)
  const[password, setPassword]=useState("")


  const PasswordGenerator= useCallback(() => {
    let pass=""
    // useCallback is a react hook lets u cache a function defination between re renders
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="0123456789"
    if(char) str+="!@#$%&*{}[]~`"
    for(let i=1; i<=length;i++){
      let index=Math.floor(Math.random()*str.length)
      pass+=str.charAt(index)
    }
    setPassword(pass)
  } , [length, char,number,setPassword ])

  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {PasswordGenerator()}, [length, number, char, PasswordGenerator]);

  return (
    <>
      <div className='w-full  rounded-lg  max-w-md mx-auto shadow-lg px-4 my-8 py-4 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Generated Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev)
             }}
            />
          </div>
          <label htmlFor="numberInput">Numbers</label>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={char}
            id="charInput"
            onChange={() => {
              setChar((prev) => !prev)
             }}
            />
          </div>
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </>
  )
}
export default App
