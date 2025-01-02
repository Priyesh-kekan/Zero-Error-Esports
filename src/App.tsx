import React from 'react';
import Navbar from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import Team from './components/Team';
import Social from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Events />
      <Team />
      <Social />
    </div>
  );
}

export default App;