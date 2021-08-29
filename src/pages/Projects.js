import React, { useState } from 'react';
import ProjectFiles from '../components/ProjectFiles';

const Projects = () => {
  const [items] = useState(ProjectFiles)




  return (
  < >
    <section className="Projects">
      <div className="overlay py-20 px-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:pt-32">
      {items.map((item) => {
        const {id, path, desc, site, repo}=item
        return(
          <div key={id}>
            <small className="block text-center text-white font-mono text-lg">{desc}</small>
              <p src={site}></p>
              <p src={repo}></p>
            <img src={path} alt={desc} className="p-5 bg-white rounded" />
            
          </div>
        )
      })}
      </div>
    </section>

  
  </>
  )
}

export default Projects






// import React from 'react'

// import dock from '../images/docknflock.png';
// import pizza from '../images/pizza.png';
// import shop from '../images/shop.png';
// import books from '../images/bestsellers.png';
// import weather from '../images/weather.png';

// import google from '../images/googlebooks.png'
// import zoo from '../images/zoo.png'
// import thoughts from '../images/deepthoughts.png'

// // import mountains from '../images/mtns-at-night.jpeg';

// const Projects = () => {
//   return (
//     <>
//      {/* <img 
//       src={mountains} 
//       alt='mountains at night' 
//       className='absolute object-cover w-full h-full' 
//     /> */}
//     <div className='project-card'>
//       <img src={pizza} alt='pizza-hunt-project' className='h-full rounded mb-20 shadow'/>
//       <div className="center-content">
//         <h2 className='text-2xl mb-2'>
//         <a href="https://pizza-hunting.herokuapp.com/">Pizza-Hunt</a>
//         </h2>
//         <p className="mb-2">A social app for making friends and designing pizzas</p>
//       </div>
//     </div>

//     <div className='project-card'>
//       <img src={dock} alt='dock-n-flock-project' className='h-full rounded mb-20 shadow'/>
//       <div className="center-content">
//         <h2 className='text-2xl mb-2'>
//         <a href="https://dock-and-flock.herokuapp.com/">Dock-N-Flock</a>
//         </h2>
//         <p className="mb-2">Search for events and parking all in one place</p>
//       </div>
//     </div>

//     <div className='project-card'>
//       <img src={shop} alt='mern-shop-project' className='h-full rounded mb-20 shadow'/>
//       <div className="center-content">
//         <h2 className='text-2xl mb-2'>
//         <a href="https://the-online-store.herokuapp.com/">Shop-Shop</a>
//         </h2>
//         <p className="mb-2">An interactive ecommerce website built with the MERN stack using Redux</p>
//       </div>
//     </div> 

//     <div className='project-card'>
//       <img src={books} alt='mern-shop-project' className='h-full rounded mb-20 shadow'/>
//       <div className="center-content">
//         <h2 className='text-2xl mb-2'>
//         <a href="https://cpesar.github.io/the-best-sellers/">The Best Sellers</a>
//         </h2>
//         <p className="mb-2">Search for books using the Google Books API and add them to your favorites list</p>
//       </div>
//     </div> 

//     <div className='project-card'>
//       <img src={weather} alt='mern-shop-project' className='h-full rounded mb-20 shadow'/>
//       <div className="center-content">
//         <h2 className='text-2xl mb-2'>
//         <a href="https://cpesar.github.io/weather-dashboard-refactor/">Weather-App</a>
//         </h2>
//         <p className="mb-2">Never leave your house without knowing the weather again</p>
//       </div>
//     </div> 

//     <div className='project-card'>
//       <img src={google} alt='mern-shop-project' className='h-full rounded mb-20 shadow'/>
//       <div className="center-content">
//         <h2 className='text-2xl mb-2'>
//         <a href="https://the-book-store-2.herokuapp.com/">Weather-App</a>
//         </h2>
//         <p className="mb-2">Never leave your house without knowing the weather again</p>
//       </div>
//     </div> 

//     <div className='project-card'>
//       <img src={zoo} alt='mern-shop-project' className='h-full rounded mb-20 shadow'/>
//       <div className="center-content">
//         <h2 className='text-2xl mb-2'>
//         <a href="https://zoanimals.herokuapp.com/">Weather-App</a>
//         </h2>
//         <p className="mb-2">Never leave your house without knowing the weather again</p>
//       </div>
//     </div> 

//     <div className='project-card'>
//       <img src={thoughts} alt='mern-shop-project' className='h-full rounded mb-20 shadow'/>
//       <div className="center-content">
//         <h2 className='text-2xl mb-2'>
//         <a href="https://deep-thinker.herokuapp.com/">Weather-App</a>
//         </h2>
//         <p className="mb-2">Never leave your house without knowing the weather again</p>
//       </div>
//     </div> 


//     </>
//   )
// }

// export default Projects