import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-sky-600 hover:text-sky-500 transition-colors">
          Alafour LLC
        </Link>

        <div className="flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-sky-600 transition-colors">About</Link>
          <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
          <Link to="/experience" className="hover:text-sky-600 transition-colors">Experience</Link>
          <Link to="/contact" className="hover:text-sky-600 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;