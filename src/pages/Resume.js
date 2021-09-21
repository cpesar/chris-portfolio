
import React from 'react'


const Resume = () => {
  return<>
    <main className="Resume">
      <div className="overlay p-5 flex flex-col items-center font-mono">

      <section className="p-10">
          <a 
            className="mr-5 bg-yellow-300 py-2 px-4 rounded-full font-mono hover:bg-blue-500"
            href ="https://www.dropbox.com/s/ehg29vc1uz5l2lw/Pesar%2C%20Chris%20CV%20.pdf?dl=0"
            >View my Resume</a>
        </section>

        <section className="container flex flex-col items-center">
        <h1 className="text-blue-300 py-5 text-2xl">Front-end Proficiencies:</h1>
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
          <h1 className="text-blue-300 py-5 text-2xl">Back-end Proficiencies:</h1>
            <p class="w-1/3 text-white rounded-lg shadow">
              <ul class=" divide-gray-100 text-xl flex flex-col items-center">
                <li class="p-3">Javascript</li>
                <li class="p-3">Node.js</li>
                <li class="p-3">Express.js</li>
                <li class="p-3">MySQL, Sequelize</li>
                <li class="p-3">NoSQQL, MongoDB</li>
                <li class="p-3">API's</li>
              </ul>
            </p>
        </section>

        <section className="container flex flex-col items-center px-10">
          <p className="text-blue-300 py-5 text-2xl">Extensive knowledge of GitHub, Heroku and Netlify</p>
        </section>

      </div>
    </main>
  </>
}

export default Resume