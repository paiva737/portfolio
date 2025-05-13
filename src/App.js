import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Experience';
import Contact from './components/Contact/Contact';
import DirectContact from './components/DirectContact/DirectContact';
import Obrigado from './components/paginaObrigado/Obrigado';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
  
    AOS.init({
      duration: isMobile ? 500 : 1000,
      offset: isMobile ? 80 : 300,
      easing: 'ease-in-out',
      once: true,
      anchorPlacement: 'top-bottom',
      startEvent: 'DOMContentLoaded',
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Certificates />
              <Contact />
              <DirectContact />
            </>
          }
        />
        <Route path="/obrigado" element={<Obrigado />} />
      </Routes>
    </Router>
  );
}

export default App;
