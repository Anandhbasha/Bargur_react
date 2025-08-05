import React from 'react'
import './Card.css'

const Card = ({device,pixel,price,qua,No_of_device,devices}) => {
  return (
    <div className='Card' style={{marginLeft:"100px",borderRadius:"10px"}}>
        <div className='topSection'>
            <p>{device}</p>
            <p>{pixel}</p>
        </div>
        <h5>Monthly Price</h5>
        <p>{price}</p>
        <h5>Video & Sound Quality</h5>
        <p>{qua}</p>
        <h5>Resolution</h5>
        <p>{pixel}</p>
        <h5>Supported Device</h5>
        <p>{devices}</p>
        <h5>Devices at your household can watch same time</h5>
        <p>{No_of_device}</p>
        <h5>Downloaded Device</h5>
        <p>{No_of_device}</p>
    </div>
  )
}

export default Card