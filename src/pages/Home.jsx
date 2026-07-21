import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 bg-navy-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold font-heading mb-4 text-white tracking-tight">
  Alafour LLC
</h1>

<p className="text-3xl md:text-4xl font-semibold font-accent text-white mb-3">
  Technology, Cloud, and AI Solutions
</p>

<p className="text-xl md:text-2xl font-body text-white/90 mb-8">
  Woman-Owned • 20+ Years Experience • AWS AI Certified
</p>
          <br></br>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/experience"
              className="px-10 py-4 bg-primary-500 hover:bg-primary-600 rounded-2xl font-semibold text-lg transition-all text-white"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 bg-primary-500 hover:bg-primary-600 rounded-2xl font-semibold text-lg transition-all text-white"
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
           Alafour is a woman-owned small business with over 20 years of enterprise and government technology experience. We deliver reliable, high-quality solutions with the personal accountability and attention to detail that comes from senior leadership directly involved in every project.
           <br></br><br></br>
           AWS AI certified and experienced in modernizing complex systems, we focus on practical, long-term results — combining deep technical expertise with clear communication and full ownership of outcomes.


          </p>

          <Link
            to="/about"
            className="inline-block mt-10 text-primary-500 hover:text-primary-600 font-medium text-lg"
          >
            Learn more about our background and approach →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;