import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import All from './components/All';
import Coded from './components/Coded';
import Designed from './components/Designed';
import Contact from './components/Contact';
import Map from './components/Map';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="skills" element={<Skills />} />
          <Route exact path="portfolio" element={<Portfolio />} >
            
            <Route exact path="all" element={<All />} />
            <Route exact path="coded" element={<Coded />} />
            <Route exact path="designed" element={<Designed />} />
          </Route>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/map" element={<Map/>} />
          
          
        </Routes>
      </Router>
      {/* <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact /> */}
    </>
  );
}

export default App;
