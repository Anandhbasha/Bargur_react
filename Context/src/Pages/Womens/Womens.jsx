import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import { PassingValue } from '../../App'


const Womens = () => {
const allData = useContext(PassingValue)
 const womensProduct = allData.filter((item)=>item.prodCat==="Womens")
  return (
    <div className='Womens'>
      {womensProduct.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default Womens