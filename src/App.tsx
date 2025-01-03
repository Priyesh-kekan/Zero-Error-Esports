import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Team from './components/Team';
import Social from './components/Social';

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