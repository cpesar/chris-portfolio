import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components

import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// Pages
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
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
