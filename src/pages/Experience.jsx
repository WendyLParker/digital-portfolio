function Experience() {
  return (
    <div className="pt-20 bg-gray-100 dark:bg-gray-950 min-h-screen">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Relevant Experience</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Key Personnel Past Performance & Leadership Highlights
            </p>
            <p className="text-sm text-gray-500 mt-3">
              Projects delivered by Alafour LLC founder prior to company formation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 - Enterprise Modernization */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="h-52 bg-gradient-to-br from-sky-600 to-indigo-600 flex items-center justify-center text-white text-5xl font-bold">Modernization</div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Enterprise Modernization</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-4">
                  Led migration of legacy systems to modern architecture, improving performance by ~40% 
                  and increasing developer velocity. Implemented microservices using .NET 8, RabbitMQ, and AWS.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full">.NET 8</span>
                  <span className="text-xs px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full">React</span>
                  <span className="text-xs px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full">RabbitMQ</span>
                  <span className="text-xs px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full">AWS</span>
                </div>
                <a href="#" className="block text-center py-3 bg-sky-600 text-white rounded-2xl font-medium hover:bg-sky-700 transition">
                  View Details →
                </a>
              </div>
            </div>

            {/* Card 2 - API Integration */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="h-52 bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white text-5xl font-bold">API</div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">API Integration Platform</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-4">
                  Designed and developed secure enterprise REST APIs with OAuth2 / JWT authentication 
                  serving 50k+ daily users. Reduced API response time by 55% through optimization.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full">C#</span>
                  <span className="text-xs px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full">ASP.NET</span>
                  <span className="text-xs px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full">SQL Server</span>
                  <span className="text-xs px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full">OAuth/JWT</span>
                </div>
                <a href="#" className="block text-center py-3 bg-sky-600 text-white rounded-2xl font-medium hover:bg-sky-700 transition">
                  View Details →
                </a>
              </div>
            </div>

            {/* Card 3 - AI Implementation */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="h-52 bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white text-5xl font-bold">AI</div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">AI Implementation</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-4">
                  Integrated AWS AI services and built internal productivity tools. 
                  Delivered AI-enhanced solutions that improved team efficiency.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full">AWS AI</span>
                  <span className="text-xs px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full">.NET</span>
                  <span className="text-xs px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full">GitHub Copilot</span>
                </div>
                <a href="#" className="block text-center py-3 bg-sky-600 text-white rounded-2xl font-medium hover:bg-sky-700 transition">
                  View Details →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;