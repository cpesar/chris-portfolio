import React from 'react';
import { Link } from 'react-router-dom';

import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Home(){
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        ' Developer', 
        ' Student', 
        ' Snowboarder', 
        ' Surfer', 
        ' Wanderer', 
        ' Friend', 
        ' Human'
      ],
    });
  }, );

  return <>
  <section className="Home">
    <div className="overlay flex flex-col items-center justify-center text-white px-5">
      <h1 className="text-5xl font-mono text-right mb-10 lg:text-center lg:text-7xl lg:px-56">
        Hi! I'm Chris 
        <span className="text-blue-500" ref={textRef}> </span> 
      </h1>

      <div className="items-center">
        <Link 
          to="/contact" 
          className="mr-5 bg-blue-500 py-2 px-4 rounded-full font-mono hover:bg-blue-800">
            Contact
        </Link>

        <Link 
          to="/projects" 
          className="mr-5 bg-white text-blue-500 py-2 px-4 rounded-full font-mono hover:bg-blue-800 hover:text-white">
            Projects
        </Link>
      </div>
    </div>
  </section>
</>
}