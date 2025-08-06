import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Links'>
          <Link to="/">All Products</Link>
          <Link to="/mens">Mens</Link>
          <Link to="/womens">Womens</Link>
        </div>
    </div>
  )
}

export default Navbar