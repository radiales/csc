import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white text-center p-8">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Willkommen beim{" "}
          <span className="text-green-400">CSC SOE</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Ihr Cannabis Social Club in der Sächsischen Schweiz Osterzgebirge.
        </p>
        <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Gemeinschaft, Aufklärung, Verantwortung
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            In der malerischen Kulisse von Pirna und Umgebung schaffen wir einen
            Raum, in dem sich Cannabis-Enthusiasten sicher und legal austauschen
            und verwirklichen können. Der CSC SOE steht für einen
            verantwortungsvollen Umgang mit Cannabis, fördert die Gemeinschaft und
            leistet wichtige Aufklärungsarbeit. Entdecken Sie mit uns, wie eine
            moderne Cannabis-Kultur aussieht – legal, sicher und voller Potenzial.
          </p>
        </div>
        <div className="mt-12">
          <Link
            href="/application"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-lg"
          >
            Jetzt Mitglied werden
          </Link>
        </div>
      </div>
    </main>
  );
}
