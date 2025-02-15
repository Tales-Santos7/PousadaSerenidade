import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navigation() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-4">
      <div className="text-white text-2xl font-semibold">Pousada Serenidade</div>
      
      <div className="hidden md:flex items-center space-x-6 text-white">
        <a href="#acomodacoes" className="hover:text-yellow-400 transition">Acomodações</a>
        <a href="#experiencias" className="hover:text-yellow-400 transition">Experiências</a>
        <a href="#fotos" className="hover:text-yellow-400 transition">Fotos</a>
        <a href="#localizacao" className="hover:text-yellow-400 transition">Localização</a>
        <Button>Reserve Agora</Button>
      </div>
      
      <button className="md:hidden text-white">
        <Menu size={24} />
      </button>
    </nav>
  );
}