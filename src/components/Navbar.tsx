import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          CSC SOE
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Startseite
          </Link>
          <Link href="/application" className="text-gray-300 hover:text-white transition-colors">
            Mitglied werden
          </Link>
          <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
            Team
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
