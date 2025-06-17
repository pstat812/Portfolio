import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return <div className="container mx-auto max-w-7xl">
    
    <Navbar/>
    <Hero/>
    <About/>
    <Education/>
    <Experiences/>
    <Projects/>
    <Contact/>
    <Footer/>

  </div>
}

export default App