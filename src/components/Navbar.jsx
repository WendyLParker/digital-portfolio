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

  <div className="flex items-center justify-between pl-6 pr-8 py-4">

    {/* Logo - Flush Left */}
    <Link to="/" className="-ml-1 flex-shrink-0">
      <img
        src={logo}
        alt="AlaFour Logo"
        className="h-12 w-auto"
      />
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
      <Link to="/" className={`px-5 py-2 rounded-2xl transition-all ${isActive('/') ? 'border-2 border-primary-500 bg-white dark:text-slate-200' : 'bg-primary-500 text-white'}`}>Home</Link>
      <Link to="/about" className={`px-5 py-2 rounded-2xl transition-all ${isActive('/about') ? 'border-2 border-primary-500 bg-white dark:text-slate-200' : 'bg-primary-500 text-white'}`}>About</Link>
      <Link to="/services" className={`px-5 py-2 rounded-2xl transition-all ${isActive('/services') ? 'border-2 border-primary-500 bg-white dark:text-slate-200' : 'bg-primary-500 text-white'}`}>Services</Link>
      <Link to="/experience" className={`px-5 py-2 rounded-2xl transition-all ${isActive('/experience') ? 'border-2 border-primary-500 bg-white dark:text-slate-200' : 'bg-primary-500 text-white'}`}>Experience</Link>
      <Link to="/contact" className={`px-5 py-2 rounded-2xl transition-all ${isActive('/contact') ? 'border-2 border-primary-500 bg-white dark:text-slate-200' : 'bg-primary-500 text-white'}`}>Contact</Link>
    </div>

    {/* Mobile Hamburger */}
    <button 
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden p-2 text-slate-700 dark:text-slate-300"
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden px-6 pb-6 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col gap-3 text-base pt-2">
        <Link to="/" onClick={() => setIsOpen(false)} className={`px-5 py-3 rounded-2xl ${isActive('/') ? 'border-2 border-red-600 bg-white text-slate-800 dark:text-slate-200' : 'bg-primary-500 text-white'}`}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className={`px-5 py-3 rounded-2xl ${isActive('/about') ? 'bg-primary-500 text-white' : ''}`}>About</Link>
        <Link to="/services" onClick={() => setIsOpen(false)} className={`px-5 py-3 rounded-2xl ${isActive('/services') ? 'bg-primary-500 text-white' : ''}`}>Services</Link>
        <Link to="/experience" onClick={() => setIsOpen(false)} className={`px-5 py-3 rounded-2xl ${isActive('/experience') ? 'bg-primary-500 text-white' : ''}`}>Experience</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className={`px-5 py-3 rounded-2xl ${isActive('/contact') ? 'bg-primary-500 text-white' : ''}`}>Contact</Link>
      </div>
    </div>
  )}

</nav>
  );
}

export default Navbar;