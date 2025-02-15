import React from 'react';
import Header from './components/sections/Header';
import Accommodations from './components/sections/Accommodations';
import Experiences from './components/sections/Experiences';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Accommodations />
      <Experiences />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;