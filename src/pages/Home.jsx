function Home() {
  return (
    <>
      {/* Hero Section - Full screen and prominent */}
      <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Alafour LLC</h1>
          <p className="text-3xl text-sky-400 mb-6">
            Reliable Software Solutions for Government and Enterprise
          </p>
          <p className="text-xl max-w-2xl mx-auto text-gray-400 mb-10">
            20+ Years • .NET • React • AWS • Secure Cloud Solutions
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="/experience" 
              className="px-8 py-4 bg-sky-600 hover:bg-sky-500 rounded-2xl font-semibold transition-all"
            >
              See Past Performance
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border border-white/50 hover:bg-white/10 rounded-2xl font-semibold transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Short teaser below hero */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About Alafour LLC</h2>
          <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            We specialize in building reliable, secure, and scalable software solutions 
            for government agencies and enterprise clients with over 20 years of experience.
          </p>
          <a 
            href="/about" 
            className="inline-block mt-8 text-sky-600 hover:text-sky-500 font-medium text-lg"
          >
            Learn more about us →
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;