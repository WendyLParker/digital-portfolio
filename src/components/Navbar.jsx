import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary-500 dark:text-white">
            <img
              src={logo}
              alt="AlaFour Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/" className={`px-5 py-2 rounded-2xl transition-all ${isActive('/') ? 'bg-primary-500 text-accent-500' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}>Home</Link>
            <Link to="/about" className={`px-5 py-2 rounded-2xl transition-all ${isActive('/about') ? 'bg-primary-500 text-accent-500' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}>About</Link>
            <Link to="/services" className={`px-5 py-2 rounded-2xl transition-all ${isActive('/services') ? 'bg-primary-500 text-accent-500' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}>Services</Link>
            <Link to="/experience" className={`px-5 py-2 rounded-2xl transition-all ${isActive('/experience') ? 'bg-primary-500 text-accent-500' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}>Experience</Link>
            <Link to="/contact" className={`px-5 py-2 rounded-2xl transition-all ${isActive('/contact') ? 'bg-primary-500 text-accent-500' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}>Contact</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700 dark:text-slate-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-3 text-base">
              <Link to="/" onClick={() => setIsOpen(false)} className={`px-5 py-3 rounded-2xl ${isActive('/') ? 'bg-primary-500 text-white' : ''}`}>Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className={`px-5 py-3 rounded-2xl ${isActive('/about') ? 'bg-primary-500 text-white' : ''}`}>About</Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className={`px-5 py-3 rounded-2xl ${isActive('/services') ? 'bg-primary-500 text-white' : ''}`}>Services</Link>
              <Link to="/experience" onClick={() => setIsOpen(false)} className={`px-5 py-3 rounded-2xl ${isActive('/experience') ? 'bg-primary-500 text-white' : ''}`}>Experience</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className={`px-5 py-3 rounded-2xl ${isActive('/contact') ? 'bg-primary-500 text-white' : ''}`}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;