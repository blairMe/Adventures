import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className='navBar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            TRVL
          </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar