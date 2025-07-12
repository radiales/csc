import React from 'react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center text-white mb-12">Kontakt</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Kontaktinformationen</h2>
          <p className="text-gray-300 mb-4">
            Haben Sie Fragen oder Anregungen? Zögern Sie nicht, uns zu kontaktieren.
          </p>
          <div className="space-y-4 text-lg">
            <p><strong>Verein:</strong> CSC SOE (Sächsische Schweiz Osterzgebirge)</p>
            <p><strong>E-Mail:</strong> <a href="mailto:info@csc-soe.de" className="text-green-400 hover:underline">info@csc-soe.de</a></p>
            <p><strong>Adresse:</strong> Musterstraße 1, 01796 Pirna</p>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
