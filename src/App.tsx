import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UpcomingEvents from './components/UpcomingEvents';
import Team from './components/Team';
import Social from './components/Social';
import CompletedEvents from './components/CompletedEvents'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <CompletedEvents />
      <Team />
      <Social />
    </div>
  );
}

export default App;