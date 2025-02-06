import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const CompletedEvents = () => {
  const events = [
    {
      title: "ZE Face-OFF Invitational",
      date: "01-02-2025,02-02-2025",
      location: "Online",
      prize: "₹2000",
      game: "BGMI (Battle Grounds Mobile India)",
      winner: "Zoldyck",
      RunnerUp: 'wolverineNub',
    },
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Completed Events</h2>
        <div className="flex justify-center items-center gap-8">
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
                <div className="mt-4">
                  <span className="text-red-500 font-semibold">Winner:</span>
                  <span className="ml-2">{event.winner}</span>
                </div>
                <div className="mt-4">
                  <span className="text-red-500 font-semibold">Runner Up:</span>
                  <span className="ml-2">{event.RunnerUp}</span>
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

export default CompletedEvents;