import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "APEX Championship Series",
      date: "March 15-20, 2024",
      location: "Los Angeles, CA",
      prize: "$100,000",
      game: "Valorant"
    },
    {
      title: "Winter Invitational",
      date: "April 5-7, 2024",
      location: "Online",
      prize: "$50,000",
      game: "League of Legends"
    },
    {
      title: "Pro League Season 5",
      date: "May 1-30, 2024",
      location: "Las Vegas, NV",
      prize: "$250,000",
      game: "CS:GO"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-black text-white rounded-lg p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold mb-4">{event.title}</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-red-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span>{event.location}</span>
                </div>
                <div className="mt-4">
                  <span className="text-red-500 font-semibold">Prize Pool:</span>
                  <span className="ml-2">{event.prize}</span>
                </div>
                <div className="mt-2">
                  <span className="bg-red-600 px-3 py-1 rounded-full text-sm">
                    {event.game}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;