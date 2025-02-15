import React from 'react';
import { Wifi, Coffee, Wind, Tv } from 'lucide-react';

const rooms = [
  {
    title: 'Suíte Luxo',
    description: 'Experimente o máximo conforto com vista panorâmica',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
    amenities: ['Ar Condicionado', 'Wi-Fi', 'TV 4K', 'Café da Manhã'],
  },
  {
    title: 'Chalé Premium',
    description: 'Privacidade e aconchego em meio à natureza',
    image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&q=80',
    amenities: ['Ar Condicionado', 'Wi-Fi', 'TV 4K', 'Café da Manhã'],
  },
];

export default function Accommodations() {
  return (
    <section id="acomodacoes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Nossas Acomodações</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{room.title}</h3>
                <p className="text-gray-600 mb-6">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {i === 0 && <Wind className="text-yellow-500" size={20} />}
                      {i === 1 && <Wifi className="text-yellow-500" size={20} />}
                      {i === 2 && <Tv className="text-yellow-500" size={20} />}
                      {i === 3 && <Coffee className="text-yellow-500" size={20} />}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-400 transition">
                  Reservar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}