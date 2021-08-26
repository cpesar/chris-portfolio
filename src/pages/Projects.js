import React from 'react'
import dock from '../images/dock-n-flock.png';
import pizza from '../images/Pizza.png';
import shop from '../images/Shop.png';
import books from '../images/best-sellers.png';
import weather from '../images/weather-app.png'

const Projects = () => {
  return (
    <>
    <div className='project-card'>
      <img src={pizza} alt='pizza-hunt-project' className='h-full rounded mb-20 shadow'/>
      <div className="center-content">
        <h2 className='text-2xl mb-2'>Pizza-Hunt</h2>
        <p className="mb-2">A social app for making friends and designing pizzas</p>
      </div>
    </div>

    <div className='project-card'>
      <img src={dock} alt='dock-n-flock-project' className='h-full rounded mb-20 shadow'/>
      <div className="center-content">
        <h2 className='text-2xl mb-2'>Dock-N-Flock</h2>
        <p className="mb-2">Search for events and parking all in one place</p>
      </div>
    </div>

    <div className='project-card'>
      <img src={shop} alt='mern-shop-project' className='h-full rounded mb-20 shadow'/>
      <div className="center-content">
        <h2 className='text-2xl mb-2'>Shop-Shop</h2>
        <p className="mb-2">An interactive ecommerce website built with the MERN stack using Redux</p>
      </div>
    </div> 

    <div className='project-card'>
      <img src={books} alt='mern-shop-project' className='h-full rounded mb-20 shadow'/>
      <div className="center-content">
        <h2 className='text-2xl mb-2'>Best-Sellers</h2>
        <p className="mb-2">Search for books using the Google Books API and add them to your favorites list</p>
      </div>
    </div> 

    <div className='project-card'>
      <img src={weather} alt='mern-shop-project' className='h-full rounded mb-20 shadow'/>
      <div className="center-content">
        <h2 className='text-2xl mb-2'>Weather-App</h2>
        <p className="mb-2">Never leave your house without knowing the weather again</p>
      </div>
    </div> 
    </>
  )
}

export default Projects