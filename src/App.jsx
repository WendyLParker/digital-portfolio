import { Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-sky-600">Alafour LLC</h1>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-sky-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-sky-600 transition-colors">About</a>
            <a href="#services" className="hover:text-sky-600 transition-colors">Services</a>
            <a href="#experience" className="hover:text-sky-600 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
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
            <a href="#experience" className="px-8 py-4 bg-sky-600 hover:bg-sky-500 rounded-2xl font-semibold transition-all">
              See Past Performance
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/50 hover:bg-white/10 rounded-2xl font-semibold transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">About Alafour LLC</h2>
          <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            Alafour LLC is a software development company specializing in reliable, secure,
            and scalable solutions for government agencies and enterprise clients.
            With over 20 years of hands-on experience in .NET, React, AWS, and cloud technologies,
            we help organizations modernize systems and deliver high-impact projects.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Reliable software development and modernization solutions for government agencies and enterprise clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-3">Custom Software Development</h3>
              <p className="text-gray-600 dark:text-gray-400">Full-stack development using .NET, React, and modern cloud technologies.</p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-3">Legacy System Modernization</h3>
              <p className="text-gray-600 dark:text-gray-400">Migrate and modernize existing systems with minimal disruption.</p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-3">Cloud & DevOps Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">AWS cloud architecture, CI/CD pipelines, and scalable infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Past Performance */}
      <section id="experience" className="py-24 bg-gray-100 dark:bg-gray-950">
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

            {/* Card 1 */}
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

            {/* Card 2 */}
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

            {/* Card 3 */}
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

      {/* Contact */}
      <footer id="contact" className="bg-gray-900 text-white py-16 text-center">
        <p className="text-2xl mb-6">Let's Connect</p>
        <div className="flex justify-center gap-8">
          <a href="mailto:wendy44parker@gmail.com"><Mail size={32} /></a>
          <a href="https://www.linkedin.com/in/wendyparker09" target="_blank" className="text-3xl">in</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
