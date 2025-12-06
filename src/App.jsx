import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
