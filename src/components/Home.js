import React from 'react';
import mountains from '../Assets/mtns-at-night.jpeg';

import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Home(){
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Web Developer', 'Student', 'Snowboarder', 'Wanderer', 'Friend', 'Human'],
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
        <h2 className='text-6xl text-blue-500 font-bold'> Aloha I'm Chris Pesar</h2>
        <h3 className='text-6xl text-blue-200 font-bold justify-content space-between'>
          <span ref={textRef}> </span>
        </h3>
      </section>
      
    </main>
  )
}