// import React from 'react';

// import {
//   FormControl,
//   FormLabel,
//   Input,
//   // FormErrorMessage,
//   FormHelperText,
// } from "@chakra-ui/react"

// export default function Contact(){
//   return (
// <FormControl id="email">
//   <FormLabel>Email address</FormLabel>
//   <Input type="email" />
//   <FormHelperText>We'll never share your email.</FormHelperText>
// </FormControl>
//   )
// }

import React from 'react'
// import {Link} from 'react-router-dom';
import mountains from '../assets/mtns-at-night.jpeg';

const Contact = () => {
  return (
    <main>
    <img 
      src={mountains} 
      alt='mountains at night' 
      className='absolute object-cover w-full h-full' 
    />
    <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
      <h2 className='lg:text-6xl md:text-5xl sm:text-3xl text-3xl text-blue-500 font-mono'> The Contact Page </h2>
      
    </section>
  </main>
  )
}

export default Contact