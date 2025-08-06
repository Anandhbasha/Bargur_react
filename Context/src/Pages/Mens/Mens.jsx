import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import { PassingValue } from '../../App'


const Mens = () => {
 const allData = useContext(PassingValue)
 const mensProduct = allData.filter((item)=>item.prodCat==="Mens")

  return (
    <div className='Mens'>
      {mensProduct.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default Mens