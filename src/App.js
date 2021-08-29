import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react';

// Components
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Burger from './components/Burger';

// Pages
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
        console.log('item resized')
      }
    }
    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (
    <BrowserRouter>
    <Navbar toggle={toggle}/>
    <Burger isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
       
        <Route component={Projects} path='/projects' />
        <Route component={Resume} path='/resume' />
        <Route component={Contact} path='/contact' />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
