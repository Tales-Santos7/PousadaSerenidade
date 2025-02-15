import React from 'react';
import { Menu, Phone, Mail, MapPin } from 'lucide-react';

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
      
      <nav className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="text-white text-2xl font-semibold">Pousada Serenidade</div>
        
        <div className="hidden md:flex items-center space-x-6 text-white">
          <a href="#acomodacoes" className="hover:text-yellow-400 transition">Acomodações</a>
          <a href="#experiencias" className="hover:text-yellow-400 transition">Experiências</a>
          <a href="#fotos" className="hover:text-yellow-400 transition">Fotos</a>
          <a href="#localizacao" className="hover:text-yellow-400 transition">Localização</a>
          <button className="bg-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 transition">
            Reserve Agora
          </button>
        </div>
        
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </nav>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Bem-vindo ao seu refúgio perfeito
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Em meio à natureza exuberante de Campos do Jordão, descubra o verdadeiro significado de tranquilidade e conforto
        </p>
        <button className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg hover:bg-yellow-400 transition">
          Conheça Nossas Suítes
        </button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-4 z-10">
        <div className="container mx-auto flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2">
            <Phone className="text-yellow-500" size={20} />
            <span>(12) 3456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-yellow-500" size={20} />
            <span>contato@pousadaserenidade.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-yellow-500" size={20} />
            <span>Campos do Jordão, SP</span>
          </div>
        </div>
      </div>
    </header>
  );
}