import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Company Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">Alafour LLC</h3>
            <p className="text-slate-400 leading-relaxed">
              Reliable software solutions for government agencies and enterprise clients.
            </p>
            <p className="mt-4 text-sm">20+ Years Experience</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-primary-500 transition-colors">About Us</Link>
              <Link to="/services" className="hover:text-primary-500 transition-colors">Services</Link>
              <Link to="/experience" className="hover:text-primary-500 transition-colors">Past Performance</Link>
              <Link to="/contact" className="hover:text-primary-500 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <p className="text-slate-400">
              Ready to discuss your project?<br />
              <Link to="/contact" className="text-primary-500 hover:text-primary-300">Send us a message</Link>
            </p>

            <div className="mt-8 text-sm">
              <p>© {new Date().getFullYear()} Alafour LLC. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;