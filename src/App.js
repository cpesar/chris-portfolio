import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";

import MainLayout from "../src/components/Home/MainLayout.jsx";

// Components
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Navigation/Footer";
import Navbar from "./components/Navigation/Navbar";
import Burger from "./components/Navigation/Burger";

// Pages
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";

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
      <MainLayout>
        <Navbar toggle={toggle} />
        <Burger isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />

          <Route component={Projects} path="/projects" />
          <Route component={Resume} path="/resume" />
          <Route component={Contact} path="/contact" />
        </Switch>
        <Footer />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
