import React from 'react';
import mountains from '../images/mtns-at-night.jpeg';

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

  return(
    <main>
      <img 
        src={mountains} 
        alt='mountains at night' 
        className='absolute object-cover w-full h-full' 
      />
      
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h2 className='lg:text-6xl md:text-5xl sm:text-3xl text-3xl text-blue-500 font-mono'> Aloha I'm Chris </h2>
        <h3 className='lg:text-6xl md:text-5xl sm:text-3xl text-3xl text-blue-200 font-mono justify-content space-between'>
          <span className="justify-center" ref={textRef}> </span>
        </h3>
      </section>
      
    </main>
  )
}