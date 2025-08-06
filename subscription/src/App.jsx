import React from 'react'
import Card from './Card'

const App = () => {
  const cardDetails = [
    {
      device:"Mobile",
      pixel:"480p",
      price:149,
      qua:"Fair",
      devices:"Mobile,Phone,Tab",
      No_of_device:1
    },
    {
      device:"Basic",
      pixel:"720p",
      price:199,
      qua:"720HD",
      devices:"Tv,Computer,Mobile,Phone,Tab",
      No_of_device:1
    }
  ]
  return (
    <div className='App' style={{display:"flex"}}>
      {cardDetails.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default App
