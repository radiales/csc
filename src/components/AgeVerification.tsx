"use client";

import { useState, useEffect } from 'react';

const AgeVerification = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const isAgeVerified = localStorage.getItem('ageVerified');
    if (isAgeVerified === 'true') {
      setIsVerified(true);
    }
  }, []);

  const handleVerification = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsVerified(true);
  };

  if (isVerified) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg text-center max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4">Altersüberprüfung</h2>
        <p className="mb-6">Bitte bestätigen Sie, dass Sie über 18 Jahre alt sind, um diese Website zu betreten.</p>
        <button
          onClick={handleVerification}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Ich bin über 18
        </button>
        <p className="text-xs text-gray-500 mt-4">
          Diese Seite ist nur für Personen über 18 Jahre in Deutschland zugänglich.
        </p>
      </div>
    </div>
  );
};

export default AgeVerification;
