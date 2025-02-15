import React from 'react';
import { Compass, Coffee, Mountain, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionTitle } from '../ui/SectionTitle';

const experiences = [
  {
    icon: <Mountain className="w-8 h-8" />,
    title: 'Trilhas Ecológicas',
    description: 'Explore trilhas exclusivas com guias especializados',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Bem-estar',
    description: 'Relaxe com massagens e tratamentos especiais',
  },
  {
    icon: <Coffee className="w-8 h-8" />,
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
        <SectionTitle>Experiências Únicas</SectionTitle>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button>
            Agende sua Experiência
          </Button>
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
      <div className="inline-block p-4 bg-yellow-100 rounded-full text-yellow-500 mb-4">
        {experience.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{experience.title}</h3>
      <p className="text-gray-600">{experience.description}</p>
    </div>
  );
}