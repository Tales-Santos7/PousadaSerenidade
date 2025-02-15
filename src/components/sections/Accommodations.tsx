import React from 'react';
import { Wifi, Coffee, Wind, Tv } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionTitle } from '../ui/SectionTitle';

interface Amenity {
  icon: React.ReactNode;
  text: string;
}

interface Room {
  title: string;
  description: string;
  image: string;
  amenities: Amenity[];
}

const rooms: Room[] = [
  {
    title: 'Suíte Luxo',
    description: 'Experimente o máximo conforto com vista panorâmica',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
    amenities: [
      { icon: <Wind size={20} />, text: 'Ar Condicionado' },
      { icon: <Wifi size={20} />, text: 'Wi-Fi' },
      { icon: <Tv size={20} />, text: 'TV 4K' },
      { icon: <Coffee size={20} />, text: 'Café da Manhã' },
    ],
  },
  {
    title: 'Chalé Premium',
    description: 'Privacidade e aconchego em meio à natureza',
    image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&q=80',
    amenities: [
      { icon: <Wind size={20} />, text: 'Ar Condicionado' },
      { icon: <Wifi size={20} />, text: 'Wi-Fi' },
      { icon: <Tv size={20} />, text: 'TV 4K' },
      { icon: <Coffee size={20} />, text: 'Café da Manhã' },
    ],
  },
];

export default function Accommodations() {
  return (
    <section id="acomodacoes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle>Nossas Acomodações</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomCard({ room }: { room: Room }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
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
              <span className="text-yellow-500">{amenity.icon}</span>
              <span>{amenity.text}</span>
            </div>
          ))}
        </div>
        
        <Button className="w-full">
          Reservar Agora
        </Button>
      </div>
    </div>
  );
}