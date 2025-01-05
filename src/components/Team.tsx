import React from 'react';
import wizardLogo from '../assets/Wizard_logo.jpg';
import savitarLogo from '../assets/ZeroError_MainLogo.jpg';
import fictionLogo from '../assets/Fiction_logo.jpg';
import godlikeLogo from '../assets/Godlike_logo.png';

const Team = () => {
  const members = [
    {
      name: "Aazam Khan",
      role: "Wizard",
      game: "ZeroError",
      image: wizardLogo
    },
    {
      name: "Deepanshu Savita",
      role: "Savitar",
      game: "ZeroError",
      image: savitarLogo
    },
    {
      name: "Harshit Soni",
      role: "Fiction",
      game: "ZeroError",
      image: fictionLogo
    },
    {
      name: "Priyesh Kekan",
      role: "Godlike",
      game: "ZeroError",
      image: godlikeLogo
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-red-600 font-bold ">{member.role}</p>
              <p className="text-gray-600">{member.game}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;