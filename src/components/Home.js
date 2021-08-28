import React from 'react';
import { Link } from 'react-router-dom';
// import mountains from '../assets/mtns-at-night.jpeg';

import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Home(){
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Student', 'Snowboarder', 'Surfer', 'Wanderer', 'Friend', 'Human'],
    });
  },[]);

  // return(
  //   <main>
  //     <img 
  //       src={mountains} 
  //       alt='mountains at night' 
  //       className='absolute object-cover w-full h-full' 
  //     />

  //     <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
  //       <h2 className='lg:text-6xl md:text-5xl sm:text-3xl text-3xl text-blue-500 font-mono'> Aloha I'm Chris </h2>
  //       <h3 className='lg:text-6xl md:text-5xl sm:text-3xl text-3xl text-blue-200 font-mono justify-content space-between'>
  //         <span className="justify-center" ref={textRef}> </span>
  //       </h3>
  //     </section>
      
  //   </main>
  // )

  return <>
  <section className="Home">
    <div className="overlay flex flex-col items-center justify-center text-white px-5">
      <h1 className="text-5xl font-mono text-right mb-5">
        Aloha! I'm Chris 
        <span className="text-blue-500" ref={textRef}> </span> 
      </h1>

      <div className="items-center">
        <Link to="/contact" 
          className="mr-5 bg-blue-500 py-2 px-4 rounded-full font-mono hover:bg-blue-800">
            Contact
        </Link>
        <Link to="/projects" 
          className="mr-5 bg-white text-blue-500 py-2 px-4 rounded-full font-mono hover:bg-blue-800 hover:text-white">
            Projects
        </Link>
      </div>
    </div>
  </section>
</>
}