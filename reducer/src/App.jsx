import React, { useReducer, useState } from 'react'

const App = () => {
  const reducer = (state,action)=>{
    switch(action.type){
      case "count":
        return {...state,count:state.count+1}
      case "changeColor":
        return {...state,bg:state.bg==="dark"?"light":"dark"}
    }
  }
  const [state,dispatch] = useReducer(reducer,{count:0,bg:"dark"})
  return (
    <div className='App'>
      <button onClick={()=>dispatch({type:"count"})}>count{state.count}</button>
      <button onClick={()=>dispatch({type:"changeColor"})}>{state.bg}</button>
    </div>
  )
}

export default App