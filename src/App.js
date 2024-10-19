import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';  // Global styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;