import React from 'react';

const Team = () => {
  const members = [
    {
      name: "Alex 'Striker' Chen",
      role: "Team Captain",
      game: "Valorant",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80"
    },
    {
      name: "Sarah 'Phoenix' Johnson",
      role: "Lead Strategist",
      game: "League of Legends",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
    },
    {
      name: "Mike 'Clutch' Rodriguez",
      role: "Pro Player",
      game: "CS:GO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
    },
    {
      name: "Emma 'Ace' Williams",
      role: "Pro Player",
      game: "Valorant",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="team" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-red-500">{member.role}</p>
                  <p className="text-sm text-gray-300">{member.game}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;