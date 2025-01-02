import React from 'react';
import { Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen bg-black">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
          alt="Gaming Setup"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="text-white space-y-6">
          <h1 className="text-6xl font-bold leading-tight">
            Dominating the <span className="text-red-600">Gaming Scene</span>
          </h1>
          <p className="text-xl max-w-2xl">
            Team Zero Error Esports is a 'player first ' professional organization currently with a roster of Battlegrounds Mobile India.
            #TalentHunters
          </p>
          <div className="flex items-center space-x-4">
            <Trophy className="w-8 h-8 text-red-600" />
            <div>
              <p className="text-2xl font-bold">#1 RANKED TEAM</p>
              <p className="text-gray-300">Global Championships 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;