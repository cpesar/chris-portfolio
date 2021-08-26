// import React from 'react';

// export default function About(){
//   return <h1>My name is Chris Pesar. I am a web developer based in Salt Lake City, Utah. When I am not coding you can find me in the moutains or at the beach.</h1>
// }




import React from 'react'
// import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1 className="lg:text-6xl md:text-5xl sm:text-3xl text-3xl text-blue-500 font-mono">
        Chris Pesar
      </h1>
      <p className="py-6 px-10 bg-blue-500 text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center">
      <a href="https://docs.google.com/document/d/e/2PACX-1vRTJHyC39JKFP4CxhhwQB2l5X0L-7T45gHsHjy12dcWhZSX9Xm-yGYkoEixBLT8_QXhUDwoRVKHSrId/pub">View my resume</a>
      </p>
     
       
    </div>
  )
}

export default About
