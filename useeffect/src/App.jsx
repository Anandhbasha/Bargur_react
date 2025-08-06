import React, { useEffect, useState } from 'react'

const App = () => {
  let[count,setCount] = useState(0)
  
  const addValue = ()=>{
    setCount(++count)
  }
  useEffect(()=>{
    console.log("Useeffect is working");
    
  },[count])
  return (
    <div className='App'>
      <button onClick={addValue}>Add{count}</button>
    </div>
  )
}
export default App