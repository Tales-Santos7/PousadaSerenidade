import React from 'react';
import { Compass, Spa, Utensils, Mountain } from 'lucide-react';

const experiences = [
  {
    icon: <Mountain className="w-8 h-8" />,
    title: 'Trilhas Ecológicas',
    description: 'Explore trilhas exclusivas com guias especializados',
  },
  {
    icon: <Spa className="w-8 h-8" />,
    title: 'Spa & Bem-estar',
    description: 'Relaxe com massagens e tratamentos especiais',
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: 'Gastronomia Local',
    description: 'Saboreie pratos típicos preparados com ingredientes da região',
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: 'Passeios Guiados',
    description: 'Conheça os pontos turísticos mais importantes da região',
  },
];

export default function Experiences() {
  return (
    <section id="experiencias" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Experiências Únicas</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="inline-block p-4 bg-yellow-100 rounded-full text-yellow-500 mb-4">
                {exp.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{exp.title}</h3>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-400 transition">
            Agende sua Experiência
          </button>
        </div>
      </div>
    </section>
  );
}