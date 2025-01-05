import React from 'react';

const Team = () => {
  const members = [
    {
      name: "Aazam Khan",
      role: "Wizard",
      game: "ZeroError",
      image: "https://via.placeholder.com/150x150"
    },
    {
      name: "Deepanshu Savita",
      role: "Savitar",
      game: "ZeroError",
      image: "https://via.placeholder.com/150x150"
    },
    {
      name: "Harshit Soni",
      role: "Fiction",
      game: "ZeroError",
      image: "https://via.placeholder.com/150x150"
    },
    {
      name: "Priyesh Kekan",
      role: "Godlike",
      game: "ZeroError",
      image: "https://via.placeholder.com/150x150"
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