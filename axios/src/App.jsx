import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [datas,setDatas] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      if(!response){
        console.log("Unable to fetch Api");
        
      }else{
        const data = await response.data
        setDatas(data)
      }
    }
    fetchData()
  },[])
  console.log(datas);
  
  return (
    <div className='App'>

    </div>
  )
}

export default App