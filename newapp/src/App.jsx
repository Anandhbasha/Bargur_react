// import React from 'react'
// import Button from './Button'

// const App = () => {
//   return (
//     <div className='App'>
//       <Button value="Delete"/>
//       <Button value="click" />
//       <Button value="Login"/>
//       <Button value = "Logout"/>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
const App = () => {
  let [count,setCount] = useState(0)
  let [bg,setBg] = useState("dark")
  const handleCount = ()=>{
    setCount(++count)
    console.log(count);    
  }
  const bgChange = ()=>{
    setBg(bg==="light"?"dark":"light")
  }
  return (
    <div className='App'style={{backgroundColor:bg==="dark"?"black":"white",color:bg==="dark"?"white":"black",width:"500px",height:"800px"}}>
      <button onClick={handleCount}>AddCount{count}</button>
      <button onClick={bgChange} >{bg}</button>
    </div>
  )}
export default App