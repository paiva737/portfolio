import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import DirectContact from './components/DirectContact/DirectContact';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <DirectContact />
    </div>
  );
}

export default App;
