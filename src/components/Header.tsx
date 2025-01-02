import React from 'react';
import { Gamepad, Calendar, Users, Share2 } from 'lucide-react';
import logo from '../assets/ZeroError_NewLogo.png';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 h-8 text-red-600" />
          <span className="text-2xl font-bold">Zero Error Esports</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
          <a href="#events" className="hover:text-red-500 transition-colors">Events</a>
          <a href="#team" className="hover:text-red-500 transition-colors">Team</a>
          <a href="#social" className="hover:text-red-500 transition-colors">Social</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;