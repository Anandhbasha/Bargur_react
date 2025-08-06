import React from 'react'
import './Card.css'
const Card = ({prodCat,productName,productPrice,productDesrc,image}) => {
  return (
    <div className='Card'>
        <div className='topSection'>
            <img src={image}></img>
        </div>
        <div className='prodSection'>
            <h2>{productName}</h2>
            <h2>{productPrice}</h2>
            <p>{productDesrc}</p>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card