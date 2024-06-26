import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [password, setPassword] = useState("")
  const [length, setLength] = useState(5)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordReference = useRef(null)

  const copyToClipboard = useCallback(()=>{
    passwordReference.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(()=>{     //useCallback hook is used to memoise function, optimise it and store it in cache 
    // useCallback is used to optimize performance by preventing unnecessary re-renders of components that rely on callbacks.

    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  
    if(numAllowed) str+='0123456789'
    if(charAllowed) str+='-=!@#$%^&*()_+[]{}|;:",./<>?'

    for (let index = 0; index < length; index++) {
      pass +=  str.charAt(Math.floor(Math.random()*str.length))
      //  str.charAt(char)
    }

    setPassword(pass)


  },[length,numAllowed,charAllowed])
  
  // passwordGenerator()
  
  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])

  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref = {passwordReference}
     
      />
      <button onClick={copyToClipboard}>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <label>Length: {length}</label>
        <input type="range" 
        min = {1}
        max = {100}
        value={length}
        // className='cursor-pointer'
        onChange={(e)=>{
          setLength(e.target.value)
        }}
        />
      </div>
      <div className="flex items-center gap-x-1">
        <label htmlFor="numberInput">Numbers</label>
        <input type="checkbox" 
        defaultChecked={numAllowed}
        id='numberInput'
        onChange={()=>{
          setNumAllowed((numAllowed)=>!numAllowed)
        }}
        
        />         

      </div>
      <div className="flex items-center gap-x-1">
        <label htmlFor="charInput">Characters</label>
        <input type="checkbox" 
        defaultChecked={charAllowed}
        id='charInput'
        onChange={()=>{
          setCharAllowed((charAllowed)=>!charAllowed)
        }}
        
        />


      </div>

    </div >
</div>
    
  )
}

export default App
