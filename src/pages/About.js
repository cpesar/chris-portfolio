// import React, { useEffect, useState } from 'react'
import React from 'react';

const About = () => {
  return <>
    <main className="About">
      <div className="overlay p-5 flex flex-col items-center font-mono">
        <section className="container flex flex-col items-center">
          <h1 className="text-white py-5 text-3xl">Front-end Proficiencies:</h1>
            <p class="w-1/3 text-white rounded-lg shadow">
              <ul class=" divide-gray-100 text-xl flex flex-col items-center">
                <li class="p-3">HTML</li>
                <li class="p-3">CSS3</li>
                <li class="p-3">TailwindCSS</li>
                <li class="p-3">Responsive Design</li>
                <li class="p-3">Javascript</li>
                <li class="p-3">React</li>
              </ul>
            </p>
        </section>

        <section className="container flex flex-col items-center px-10">
          <h1 className="text-white py-5 text-3xl">Back-end Proficiencies:</h1>
            <p class="w-1/3 text-white rounded-lg shadow">
              <ul class=" divide-gray-100 text-xl flex flex-col items-center">
                <li class="p-3">Javascript</li>
                <li class="p-3">Node.js</li>
                <li class="p-3">Express.js</li>
                <li class="p-3">MySQL, Sequelize</li>
                <li class="p-3">NoSQQL,MongoDB</li>
                <li class="p-3">API's</li>
              </ul>
            </p>
        </section>
      </div>
    </main>
  </>
}

export default About






//https://docs.google.com/document/d/e/2PACX-1vRTJHyC39JKFP4CxhhwQB2l5X0L-7T45gHsHjy12dcWhZSX9Xm-yGYkoEixBLT8_QXhUDwoRVKHSrId/pub
