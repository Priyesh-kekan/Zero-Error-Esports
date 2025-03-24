import React from 'react';
import { Gamepad, Calendar, Users, Share2 } from 'lucide-react';
import logo from '../assets/ZeroError_NewLogo_TransparentBG.png';
import { Instagram, Youtube, Linkedin} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const handleClick = (platform: string) => {
    console.log(`Clicked on ${platform}`);
  };
  return (
    <nav className="bg-black text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-12 h-12 text-red-600" />
          <span className="text-2xl font-bold">Zero Error Esports</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
          <a href="#events" className="hover:text-red-500 transition-colors">Events</a>
          <a href="#team" className="hover:text-red-500 transition-colors">Team</a>
          <a href="#social" className="hover:text-red-500 transition-colors">Socials</a>
          <a href="https://www.instagram.com/teamzer0error_es?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" onClick={() => handleClick('Instagram')} className="transform hover:scale-110 transition-transform">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="https://youtube.com/@zeroerroresports?si=XPbNTT3giB0V-fKk" onClick={() => handleClick('Youtube')} className="transform hover:scale-110 transition-transform">
            <Youtube className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/company/zero-error-esports" onClick={() => handleClick('Linkedin')} className="transform hover:scale-110 transition-transform">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://discord.gg/7MHYMrsZyv" onClick={() => handleClick('Twitch')} className="transform hover:scale-110 transition-transform">
            <FontAwesomeIcon icon={faDiscord}  className="w-8 h-8" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;