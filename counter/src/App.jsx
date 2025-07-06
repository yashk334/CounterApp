import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
 
  const handleIncrement = () =>{
      setCount(count+1);
  }
  
  const handleDecrement = () =>{
      setCount(count-1);
  }
     
  return (
    <> 
      <div className="counter">
       <h1>Counter App</h1>
       <h2>{count}</h2>
       <button onClick={handleIncrement} style={{backgroundColor:"#4CAF50"}}>+</button>
       <button onClick={handleDecrement} style={{backgroundColor:"#F44336"}}>-</button>
       </div>
    </>
  )
}

export default App
