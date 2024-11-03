import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';
import ContactMe from './components/Contact/ContactMe';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Contact />
      <Skills />
      <Testimonials />
      <ContactMe />
      <Footer />
    </main>
  );
};

export default App;
