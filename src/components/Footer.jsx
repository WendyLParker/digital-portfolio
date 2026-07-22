import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Company Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">Alafour LLC</h3>
            <p className="text-white">
              Reliable software solutions for government agencies and enterprise clients.
            </p>
            <p className="mt-4 text-sm text-white">20+ Years Experience</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a
                href="/AlaFour_Capabilities_Statement.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-500"
              >
                Download Capabilities Statement (PDF)
              </a>
            </div>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <p className="text-white">
              Ready to discuss your project?<br />
              <Link to="/contact" className="text-accent-500">Connect with Us</Link>
            </p>

            <div className="mt-8 text-sm text-white">
              <p>© {new Date().getFullYear()} Alafour LLC. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;