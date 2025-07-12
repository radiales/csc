import React from 'react';
import ApplicationForm from '@/components/ApplicationForm';

const ApplicationPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center text-white mb-12">Mitgliedsantrag</h1>
      <p className="text-gray-300 text-center mt-4 mb-12 max-w-3xl mx-auto">
        Füllen Sie das Formular aus, um Mitglied im CSC SOE zu werden. Wir prüfen Ihren Antrag sorgfältig und melden uns bei Ihnen.
      </p>
      <ApplicationForm />
    </div>
  );
};

export default ApplicationPage;
