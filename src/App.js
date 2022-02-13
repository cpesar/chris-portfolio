import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";

// Components
import Home from "./components/Dashboard/Home.jsx";
import Footer from "./components/Dashboard/Footer.jsx";
import Navbar from "./components/Navigation/Navbar.jsx";
import Burger from "./components/Navigation/Burger.jsx";

// Pages
import About from "./components/About/About.jsx";
import Resume from "./components/About/Resume.jsx";
import Contact from "./components/Contact/Contact.jsx";
// import Gallery from "./components/Projects/Gallery.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("item resized");
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <BrowserRouter>
      <Navbar toggle={toggle} />
      <Burger isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />

        {/* <Route component={Gallery} path="/projects" /> */}
        <Route component={Resume} path="/resume" />
        <Route component={Contact} path="/contact" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
