import React from 'react';
import Home from './components/Home';
import Skills from './components/Skils';
import Topbar from './components/Topbar';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/education';
import Experience from './components/Experince';

const App = () => {
  return (
    <div>
       <Toaster position="top-center" />
      <Topbar />
    <Home />
    <Education />
    <Experience />
    <About />
    
    <Skills />
    <Projects />
    <Contact />
    </div>
  );
};

export default App;