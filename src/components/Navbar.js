import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar(){
  return(
    <header className='bg-blue-900'>
    {/* // <header className='bg-black'> */}
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink 
          to='/' 
          exact 
          activeClassName='text-white'
          className='inline-flex items-center py-6 px-3 my-6 rounded text-red-200 hover:text-blue-600'
          >
            Home
          </NavLink>

          <NavLink 
          to='/about' 
          activeClassName='text-blue-200 bg-blue-300'
          className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-600'
          >
            About
          </NavLink>

          <NavLink 
          to='/projects' 
          activeClassName='text-blue-200 bg-blue-300'
          className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-600'
          >
            Projects
          </NavLink>


          <NavLink 
          to='/resume' 
          activeClassName='text-blue-200 bg-blue-300'
          className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-600'
          >
            Resume
          </NavLink>

          <NavLink 
          to='/contact' 
          activeClassName='text-blue-200 bg-blue-300'
          className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-600' 
          >
          Contact
          </NavLink>

          
        </nav>
      </div>
    </header>
  )
}