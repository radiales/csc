"use client";

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Nachricht gesendet! (Siehe Konsole für Daten)');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-white mb-2">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-2">E-Mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-white mb-2">Nachricht</label>
        <textarea
          name="message"
          id="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Nachricht senden
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
