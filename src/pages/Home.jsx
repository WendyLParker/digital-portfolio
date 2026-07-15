import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-primary-500 tracking-tight">
            Alafour LLC
          </h1>

          <p className="text-navy-500 text-2xl md:text-3xl mb-3">
            Woman-Owned Small Business
          </p>

          <p className="text-3xl md:text-4xl font-semibold mb-8 text-navy-500">
            Reliable .NET • React • AWS Solutions
          </p>

          <p className="text-xl max-w-2xl mx-auto text-accent-500 mb-12">
            20+ Years Experience • Custom Development • Modernization • Maintenance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/experience"
              className="px-10 py-4 bg-primary-500 hover:bg-primary-600 rounded-2xl font-semibold text-lg transition-all"
            >
              View Our Work
            </Link>
            <Link
  to="/contact"
  className="px-10 py-4 border-2 border-primary-500 text-navy-500 hover:bg-primary-50 hover:text-primary-600 rounded-2xl font-semibold text-lg transition-all"
>
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Strong Teaser Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100">
            Why Choose Alafour LLC?
          </h2>

          <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            With over 20 years of enterprise experience and a Woman-Owned Small Business structure,
            I deliver reliable .NET, React, and AWS solutions with the attention to detail
            and personal accountability that only comes from owning the work myself.
          </p>

          <Link
            to="/about"
            className="inline-block mt-10 text-primary-500 hover:text-primary-600 font-medium text-lg"
          >
            Learn more about my background and approach →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;