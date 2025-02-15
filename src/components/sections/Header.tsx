import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Navigation } from '../layout/Navigation';
import { Button } from '../ui/Button';

export default function Header() {
  return (
    <header className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
          alt="Pousada Vista"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <Navigation />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Bem-vindo ao seu refúgio perfeito
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Em meio à natureza exuberante de Campos do Jordão, descubra o verdadeiro significado de tranquilidade e conforto
        </p>
        <Button className="text-lg px-8 py-3">
          Conheça Nossas Suítes
        </Button>
      </div>
      
      <ContactBar />
    </header>
  );
}

function ContactBar() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-4 z-10">
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        <ContactItem icon={<Phone size={20} />} text="(12) 3456-7890" />
        <ContactItem icon={<Mail size={20} />} text="contato@pousadaserenidade.com" />
        <ContactItem icon={<MapPin size={20} />} text="Campos do Jordão, SP" />
      </div>
    </div>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-yellow-500">{icon}</span>
      <span>{text}</span>
    </div>
  );
}