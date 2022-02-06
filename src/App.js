// import './App.css';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';

// // Components
// import Home from './components/Home/Home.jsx';
// import Footer from './components/Navigation/Footer';
// import Navbar from './components/Navigation/Navbar';
// import Burger from './components/Navigation/Burger';

// // Pages
// import About from './pages/About.jsx';
// import Projects from './pages/Projects.jsx';
// import Resume from './pages/Resume.jsx';
// import Contact from './pages/Contact.jsx';

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const hideMenu = () => {
//       if (window.innerWidth > 768 && isOpen) {
//         setIsOpen(false);
//         console.log('item resized');
//       }
//     };
//     window.addEventListener('resize', hideMenu);

//     return () => {
//       window.removeEventListener('resize', hideMenu);
//     };
//   });
//   return (
//     <div className='background'>
//       <BrowserRouter>
//         <Navbar toggle={toggle} />
//         <Burger isOpen={isOpen} toggle={toggle} />
//         <Switch>
//           <Route component={Home} path='/' exact />
//           <Route component={About} path='/about' />

//           <Route component={Projects} path='/projects' />
//           <Route component={Resume} path='/resume' />
//           <Route component={Contact} path='/contact' />
//         </Switch>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

import React, { useState } from 'react';
import './App.css';

import NavBar from './components/Navigation/Navbar.jsx';
import ContactForm from './components/Contact/Contact.jsx';
import Gallery from './components/Projects/Gallery';
import About from './components/About/About';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'Ecommerce',
      description: 'A simple book search app that uses the GoogleBooks api'
    },

    {
      name: 'Blogs',
      description:
        'An app that allows users to search for parking and tickets in one conveienent place'
    },
    {
      name: 'api',
      description:
        'A weather app that uses the open weather api to show the weather for a selected location'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className='background'>
      <NavBar
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></NavBar>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
