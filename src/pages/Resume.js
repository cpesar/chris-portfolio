// import React from 'react';

// export default function Resume(){
//   return <h1>Resume Page</h1>
// }

import React from 'react'
// import {Link} from 'react-router-dom';
import mountains from '../images/mtns-at-night.jpeg';

const Resume = () => {
  return (
    <main>
    <img 
      src={mountains} 
      alt='mountains at night' 
      className='absolute object-cover w-full h-full' 
    />
    <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
      <h2 className='lg:text-6xl md:text-5xl sm:text-3xl text-3xl text-blue-500 font-mono'> The Resume Page </h2>
      
    </section>
  </main>
  )
}

export default Resume