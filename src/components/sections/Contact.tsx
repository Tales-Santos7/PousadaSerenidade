import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionTitle } from '../ui/SectionTitle';

export default function Contact() {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">Entre em Contato</h2>
      <p className="text-gray-600 mb-8">
        Estamos localizados em Campos do Jordão, SP, em meio à natureza exuberante da Serra da Mantiqueira.
      </p>
      
      <div className="space-y-4">
        <ContactInfoItem icon={<Phone />} text="(12) 3456-7890" />
        <ContactInfoItem icon={<Mail />} text="contato@pousadaserenidade.com" />
        <ContactInfoItem icon={<MapPin />} text="Rua das Araucárias, 123 - Campos do Jordão, SP" />
      </div>
      
      <div className="mt-8 flex gap-4">
        <SocialLink href="#" icon={<Instagram size={24} />} />
        <SocialLink href="#" icon={<Facebook size={24} />} />
      </div>
    </div>
  );
}

function ContactInfoItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-yellow-500">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} className="text-gray-600 hover:text-yellow-500 transition">
      {icon}
    </a>
  );
}

function ContactForm() {
  return (
    <form className="bg-white p-8 rounded-lg shadow-lg">
      <FormField
        label="Nome"
        id="name"
        type="text"
      />
      
      <FormField
        label="E-mail"
        id="email"
        type="email"
      />
      
      <FormField
        label="Mensagem"
        id="message"
        type="textarea"
      />
      
      <Button className="w-full">
        Enviar Mensagem
      </Button>
    </form>
  );
}

interface FormFieldProps {
  label: string;
  id: string;
  type: 'text' | 'email' | 'textarea';
}

function FormField({ label, id, type }: FormFieldProps) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 mb-2" htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      ) : (
        <input
          type={type}
          id={id}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      )}
    </div>
  );
}