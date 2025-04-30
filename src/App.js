import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
    </div>
  );
}

export default App;
