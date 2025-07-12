import React from 'react';

const ImpressumPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-gray-300">
      <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>
      <div className="prose prose-invert max-w-none">
        <p>Angaben gemäß § 5 TMG</p>
        <p>
          <strong>CSC SOE (Sächsische Schweiz Osterzgebirge)</strong><br />
          Musterstraße 1<br />
          01796 Pirna
        </p>
        <p>
          <strong>Vertreten durch:</strong><br />
          Max Mustermann (Vorstandsvorsitzender)
        </p>
        <p>
          <strong>Kontakt:</strong><br />
          E-Mail: <a href="mailto:info@csc-soe.de">info@csc-soe.de</a>
        </p>
        <p>
          <strong>Registereintrag:</strong><br />
          Eintragung im Vereinsregister.<br />
          Registergericht: Amtsgericht Pirna<br />
          Registernummer: VR 12345
        </p>
        <h2 className="text-2xl font-bold text-white mt-8">Haftungsausschluss</h2>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
        </p>
      </div>
    </div>
  );
};

export default ImpressumPage;
