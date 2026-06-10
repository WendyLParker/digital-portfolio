import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-slate-800 dark:text-white">
          Alafour LLC
        </Link>

        <div className="flex gap-8 text-sm font-medium">
          {['/', '/about', '/services', '/experience', '/contact'].map((path, index) => {
            const labels = ['Home', 'About', 'Services', 'Experience', 'Contact'];
            return (
              <Link
                key={path}
                to={path}
                className={`px-5 py-2 rounded-2xl transition-all ${
                  isActive(path)
                    ? 'bg-teal-700 text-white shadow-md'
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {labels[index]}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;