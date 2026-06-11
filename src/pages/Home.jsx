import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section - Strong & Professional */}
      <section className="min-h-screen flex items-center pt-20 bg-[#0F172A] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Alafour LLC
          </h1>
          <p className="text-3xl text-teal-400 mb-6">
            Reliable Software Solutions for Government and Enterprise
          </p>
          <p className="text-xl max-w-2xl mx-auto text-slate-400 mb-12">
            20+ Years of Experience • .NET • React • AWS • Security-Cleared Delivery
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/experience"
              className="px-10 py-4 bg-teal-600 hover:bg-teal-700 rounded-2xl font-semibold text-lg transition-all"
            >
              View Past Performance
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 border border-white/60 hover:bg-white/10 rounded-2xl font-semibold text-lg transition-all"
            >
              Contact Us Today
            </Link>
          </div>

          {/* Trust Line */}
          <p className="mt-12 text-sm text-slate-500">
            Trusted by Federal Agencies & Enterprise Clients
          </p>
        </div>
      </section>

      {/* Short Teaser Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100">
            About Alafour LLC
          </h2>
          <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We deliver secure, reliable, and scalable software solutions for government 
            and enterprise clients. With deep expertise in modern cloud technologies and 
            mission-critical systems.
          </p>
          <Link
            to="/about"
            className="inline-block mt-10 text-teal-600 hover:text-teal-700 font-medium text-lg"
          >
            Learn more about us →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;