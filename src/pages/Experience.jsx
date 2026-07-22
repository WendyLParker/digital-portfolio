function Experience() {
  return (
    <div className="pt-20 bg-white dark:bg-gray-900 min-h-screen">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-heading mb-4">Select Projects & Experience</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              20+ years of enterprise software development, modernization, and delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-100 dark:border-slate-700">

              {/* Blue Header - Now Centered */}
              <div className="h-40 bg-navy-500 flex items-center justify-center text-white text-2xl font-semibold">
                <p className="text-center font-accent">Application Modernization</p>
              </div>

              <div className="p-8">
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-7">
                  Modernized legacy ASP.NET MVC applications into modern React single-page applications
                  with clean .NET API backends, significantly improving user experience and maintainability.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-black dark:bg-blue-900 text-accent-500 dark:text-blue-300 rounded-full">React</span>
                  <span className="text-xs px-3 py-1 bg-black dark:bg-blue-900 text-accent-500 dark:text-blue-300 rounded-full">.NET 8</span>
                  <span className="text-xs px-3 py-1 bg-black dark:bg-blue-900 text-accent-500 dark:text-blue-300 rounded-full">REST APIs</span>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
              <div className="h-40 bg-navy-500 flex items-center justify-center text-white text-2xl font-semibold">
                <p className="text-center font-accent">Application<br></br> Migration</p>
              </div>
              <div className="p-8">
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-4">
                  Executed large-scale migration of legacy .NET Framework applications to .NET 8,
                  improving performance, security, and long-term maintainability.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-black dark:bg-emerald-900 text-accent-500 dark:text-emerald-300 rounded-full">.NET 8</span>
                  <span className="text-xs px-3 py-1 bg-black dark:bg-emerald-900 text-accent-500 dark:text-emerald-300 rounded-full">C#</span>
                  <span className="text-xs px-3 py-1 bg-black dark:bg-emerald-900 text-accent-500 dark:text-emerald-300 rounded-full">Migration</span>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
              <div className="h-40 bg-navy-500 flex items-center justify-center text-white text-2xl font-semibold">
                <p className="text-center font-accent">Application<br></br> Transformation</p>
              </div>
              <div className="p-8">
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-4">
                  Decomposed monolithic applications into microservices architecture,
                  improving scalability, deployment speed, and team autonomy.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-black dark:bg-violet-900 text-accent-500 dark:text-violet-300 rounded-full">Microservices</span>
                  <span className="text-xs px-3 py-1 bg-black dark:bg-violet-900 text-accent-500 dark:text-violet-300 rounded-full">.NET</span>
                  <span className="text-xs px-3 py-1 bg-black dark:bg-violet-900 text-accent-500 dark:text-violet-300 rounded-full">RabbitMQ</span>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
              <div className="h-40 bg-navy-500 flex items-center justify-center text-white text-2xl font-semibold">
                <p className="text-center font-accent">Cloud<br></br>Management</p>
              </div>
              <div className="p-8">
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-4">
                  Migrated on-premises applications and databases to AWS using serverless technologies
                  and managed services for better scalability and cost efficiency.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-black dark:bg-orange-900 text-accent-500 dark:text-orange-300 rounded-full">AWS</span>
                  <span className="text-xs px-3 py-1 bg-black dark:bg-orange-900 text-accent-500 dark:text-orange-300 rounded-full">Lambda</span>
                  <span className="text-xs px-3 py-1 bg-black dark:bg-orange-900 text-accent-500 dark:text-orange-300 rounded-full">DynamoDB</span>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
              <div className="h-40 bg-navy-500 flex items-center justify-center text-white text-2xl font-semibold">
                <p className="text-center font-accent">Secure API<br />Development</p>
              </div>
              <div className="p-8">
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-4">
                  Designed and built secure, high-performance RESTful API platforms with OAuth2/JWT authentication
                  supporting thousands of daily users.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-black dark:bg-cyan-900 text-accent-500 dark:text-cyan-300 rounded-full">.NET</span>
                  <span className="text-xs px-3 py-1 bg-black dark:bg-cyan-900 text-accent-500 dark:text-cyan-300 rounded-full">API Gateway</span>
                  <span className="text-xs px-3 py-1 bg-black dark:bg-cyan-900 text-accent-500 dark:text-cyan-300 rounded-full">OAuth2</span>
                </div>
              </div>
            </div>

            {/* 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
              <div className="h-40 bg-navy-500 flex items-center justify-center text-white text-2xl font-semibold">
                <p className="text-center font-accent">AI Tooling &<br />Integration</p>
              </div>
              <div className="p-8">
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-7">
                  Integrated large language models (including AI) into full-stack applications
                  to enable intelligent content generation and personalized user experiences.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-black dark:bg-fuchsia-900 text-accent-500 dark:text-fuchsia-300 rounded-full">React</span>
                  <span className="text-xs px-3 py-1 bg-black dark:bg-fuchsia-900 text-accent-500 dark:text-fuchsia-300 rounded-full">.NET</span>
                  <span className="text-xs px-3 py-1 bg-black dark:bg-fuchsia-900 text-accent-500 dark:text-fuchsia-300 rounded-full">AI</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;