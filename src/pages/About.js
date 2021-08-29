// import React, { useEffect, useState } from 'react'
import React from 'react';

const About = () => {
  return <>
    <main className="About">
      <div className="overlay p-5 flex flex-col items-center font-mono text-center">
        <section className="container flex flex-col items-center py-40">
          <h1 className="text-blue-400 py-5 text-4xl">Get to know me:</h1>
            <p class=" text-blue-300 rounded-lg shadow text-2xl ">
              Alohoa! My name is 
                <span className="text-yellow-300"
                > Chris Pesar.</span> I am a passionate web developer residing in Salt Lake City Utah. When I am not coding you can find me on the beach or in the mountains. 
            </p>
        </section>

        <section className="p-10">
          <a 
            className="mr-5 bg-yellow-300 py-2 px-4 rounded-full font-mono hover:bg-blue-500"
            href ="https://docs.google.com/document/d/e/2PACX-1vRTJHyC39JKFP4CxhhwQB2l5X0L-7T45gHsHjy12dcWhZSX9Xm-yGYkoEixBLT8_QXhUDwoRVKHSrId/pub"
            >View my Resume</a>
        </section>
       
      </div>
    </main>
  </>
}

export default About







