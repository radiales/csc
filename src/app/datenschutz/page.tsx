import React from 'react';

const DatenschutzPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-gray-300">
      <h1 className="text-4xl font-bold text-white mb-8">Datenschutzerklärung</h1>
      <div className="prose prose-invert max-w-none">
        <p>
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8">Datenerfassung auf unserer Website</h2>
        <p>
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8">Cookies</h2>
        <p>
          Unsere Website verwendet Cookies. Das sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Einige Cookies werden nach Ende der Browser-Sitzung wieder gelöscht (sog. Sitzungs-Cookies). Andere Cookies verbleiben auf Ihrem Endgerät und ermöglichen uns, Ihren Browser beim nächsten Besuch wiederzuerkennen (persistente Cookies).
        </p>
        <h2 className="text-2xl font-bold text-white mt-8">Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
        </p>
      </div>
    </div>
  );
};

export default DatenschutzPage;
