import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' 
    role='navigation'
    >
      <Link to='/' exact className='pl-8'>
        Chris Pesar
      </Link>
      <div className="pl-4 cursor-pointer md:hidden">
        <svg className="w-6 h-6" fill="none" 
          stroke="currentColor" viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
        <path 
          strokeLinecap="round" strokeLinejoin="round" 
          strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" 
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">

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
    </nav>
    
  )
}

export default Navbar

// export default function NavBar(){
//   return(
//     <header className='bg-blue-900'>
//     {/* // <header className='bg-black'> */}
//       <div className='container mx-auto flex justify-between'>
//         <nav className='flex'>
//           <NavLink 
//           to='/' 
//           exact 
//           activeClassName='text-white'
//           className='inline-flex items-center py-6 px-3 my-6 rounded text-red-200 hover:text-blue-600'
//           >
//             Home
//           </NavLink>

//           <NavLink 
//           to='/about' 
//           activeClassName='text-blue-200 bg-blue-300'
//           className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-600'
//           >
//             About
//           </NavLink>

//           <NavLink 
//           to='/projects' 
//           activeClassName='text-blue-200 bg-blue-300'
//           className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-600'
//           >
//             Projects
//           </NavLink>


//           <NavLink 
//           to='/resume' 
//           activeClassName='text-blue-200 bg-blue-300'
//           className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-600'
//           >
//             Resume
//           </NavLink>

//           <NavLink 
//           to='/contact' 
//           activeClassName='text-blue-200 bg-blue-300'
//           className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-600' 
//           >
//           Contact
//           </NavLink>

          
//         </nav>
//       </div>
//     </header>
//   )
// }