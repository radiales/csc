"use client";

import { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    email: '',
    agreedToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Antrag erfolgreich eingereicht! (Siehe Konsole für Daten)');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-white mb-2">Vollständiger Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-white mb-2">Geburtsdatum</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-white mb-2">Adresse</label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
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
        <label htmlFor="agreedToTerms" className="flex items-center text-white">
          <input
            type="checkbox"
            name="agreedToTerms"
            id="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            required
            className="mr-2 h-5 w-5 bg-gray-700 border-gray-600 rounded text-green-500 focus:ring-green-500"
          />
          Ich stimme den Vereinsbedingungen zu und bestätige, dass ich über 18 Jahre alt bin.
        </label>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
          disabled={!formData.agreedToTerms}
        >
          Antrag absenden
        </button>
      </div>
    </form>
  );
};

export default ApplicationForm;
