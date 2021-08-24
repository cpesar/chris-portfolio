import React from 'react';
import { NavLink } from 'react-router-dom';

// export default function NavBar(){
//   return(
//     <header className='bg-red-600'>
//       <div className='container mx-auto flex justify-between'>
//         <nav className='flex'>
//           <NavLink 
//           to='/' 
//           exact 
//           activeClassName='text-white'
//           className='inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl '
//           >
//             Pesar
//           </NavLink>

//           <NavLink 
//           to='/contact' 
//           activeClassName='text-red-100 bg-red-700'
//           className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800' 
//           >
//           Contact
//           </NavLink>

//           <NavLink 
//           to='/projects' 
//           activeClassName='text-red-100 bg-red-700'
//           className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
//           >
//             Projects
//           </NavLink>

//           <NavLink 
//           to='/resume' 
//           activeClassName='text-red-100 bg-red-700'
//           className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
//           >
//             Resume
//           </NavLink>

          
//         </nav>
//       </div>
//     </header>
//   )
// }

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
          className='inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-blue-200 text-4xl '
          >
            Pesar
          </NavLink>

          <NavLink 
          to='/contact' 
          activeClassName='text-blue-200 bg-blue-300'
          className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-800' 
          >
          Contact
          </NavLink>

          <NavLink 
          to='/projects' 
          activeClassName='text-blue-200 bg-blue-300'
          className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-800'
          >
            Projects
          </NavLink>

          <NavLink 
          to='/resume' 
          activeClassName='text-blue-200 bg-blue-300'
          className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-800'
          >
            Resume
          </NavLink>

          
        </nav>
      </div>
    </header>
  )
}