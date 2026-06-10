function Services() {
  return (
    <div className="pt-20 bg-white dark:bg-gray-900 min-h-screen">
      <section className="py-24">
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
              <p className="text-gray-600 dark:text-gray-400">
                Full-stack development using .NET, React, TypeScript, and modern cloud technologies.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-3">Legacy System Modernization</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Migrate and modernize existing systems with minimal disruption and maximum value.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-3">Cloud & DevOps Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AWS cloud architecture, CI/CD pipelines, infrastructure as code, and scalable solutions.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;