import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)
  const decValue = function(){
    if(count===0) alert('cannot be negative')
    else setCount(count-1)
  }

  const incValue = ()=>  {
    if (count===20) alert('cannot exceed 20')
    else setCount(count +1)
  }

  return (
  <>
  <h1>My first React app</h1>
  <div>Counter: {count}</div>

  <button onClick={decValue}>dec: {count} </button>
  <button onClick={incValue}>inc: {count} </button>

  </>
  )
}

export default App
