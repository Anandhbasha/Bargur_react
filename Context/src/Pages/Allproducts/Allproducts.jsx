import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import { PassingValue } from '../../App'

const Allproducts = () => {
  const allData = useContext(PassingValue)
  return (
    <div className='Allproducts'>
     {allData.map((item)=>(
       <Card {...item}/>
     ))}
    </div>
  )
}

export default Allproducts