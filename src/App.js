import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// Pages
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
       
        <Route component={Contact} path='/contact' />
        <Route component={Projects} path='/projects' />
        <Route component={Resume} path='/resume' />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
