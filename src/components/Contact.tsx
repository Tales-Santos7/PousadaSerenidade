import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Entre em Contato</h2>
            <p className="text-gray-600 mb-8">
              Estamos localizados em Campos do Jordão, SP, em meio à natureza exuberante da Serra da Mantiqueira.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-500" />
                <span>(12) 3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-500" />
                <span>contato@pousadaserenidade.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-500" />
                <span>Rua das Araucárias, 123 - Campos do Jordão, SP</span>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4">
              <a href="#" className="text-gray-600 hover:text-yellow-500 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-500 transition">
                <Facebook size={24} />
              </a>
            </div>
          </div>
          
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            
            <button className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-400 transition">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}