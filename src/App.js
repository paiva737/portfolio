import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
