import React from 'react';
import { Instagram, Youtube, Linkedin, Twitch } from 'lucide-react';

const Instagramlink = () => {
  window.location.href = 'https://music.youtube.com/'; // Replace with your target URL
};
const Youtubelink = () => {
  window.location.href = 'https://music.youtube.com/'; // Replace with your target URL
};
const Linkedinlink = () => {
  window.location.href = 'https://music.youtube.com/'; // Replace with your target URL
};
const Twitchlink = () => {
  window.location.href = 'https://music.youtube.com/'; // Replace with your target URL
};

const Social = () => {
  return (
    <section id="social" className="py-20 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Connect With Us</h2>
        <div className="flex justify-center space-x-8">
          <a href="#" className="transform hover:scale-110 transition-transform">
            <Instagram onClick={Instagramlink} className="w-12 h-12" />
          </a>
          <a href="#" className="transform hover:scale-110 transition-transform">
            <Youtube onClick={Youtubelink} className="w-12 h-12" />
          </a>
          <a href="#" className="transform hover:scale-110 transition-transform">
            <Linkedin onClick={Linkedinlink} className="w-12 h-12" />
          </a>
          <a href="#" className="transform hover:scale-110 transition-transform">
            <Twitch onClick={Twitchlink} className="w-12 h-12" />
          </a>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
          <p className="max-w-2xl mx-auto mb-8">
            Stay updated with our latest news, events, and exclusive content.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Social;