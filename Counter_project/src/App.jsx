import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment1= () =>{
    setCount(count+1);
  }
  const increment3= () =>{
    console.log(count);
    setCount((prev) => prev += 3);
  }

  return (
    <>
     <div className='counter'>
        <h1>Counter</h1>
        <div className='placeholder'>{ count }</div>
        <div className='buttonset'>
          <button className='button' onClick={ increment1 }>+1</button>
          <button className='button' onClick={ increment3 }>prev_value +3</button>
        </div>
      </div>
    </>
  )
}

export default App
