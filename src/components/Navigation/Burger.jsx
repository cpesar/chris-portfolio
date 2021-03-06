import React from 'react'
import { Link } from 'react-router-dom';

const Burger = ({ isOpen, toggle }) => {
  return (
    <div className={
      isOpen ?
      'grid grid-rows-5 text-center items-center bg-black text-white font-mono' 
      :'hidden'
    }
    onClick={toggle}
    >
       <Link className="p-4" to='/' exact>
        Home
      </Link>
      <Link className="p-4" to='/about'>
        About
      </Link>
      <Link className="p-4" to='/projects'>
        Projects
      </Link>
      <Link className="p-4" to='/resume'>
        Resume
      </Link>
      <Link className="p-4" to='/contact'>
        Contact
      </Link>
    </div>
  )
}

export default Burger
