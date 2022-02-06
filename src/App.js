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
