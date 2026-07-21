function Services() {
  return (
    <div className="pt-20 bg-white dark:bg-gray-900 min-h-screen">
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-heading mb-6">Our Services</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Specialized .NET, React, and AWS solutions delivered with 20+ years of enterprise experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-slate-300 dark:bg-slate-800 p-10 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6 text-navy-500">Custom Software Development</h3>
              <p>
                Full-stack application development tailored to your needs. From concept to production, I build secure, scalable, and maintainable systems.
              </p>
              <br></br>
              <ul className="space-y-3">
                <li>• .NET / C# backend development</li>
                <li>• React & TypeScript frontends</li>
                <li>• RESTful APIs and system integrations</li>
                <li>• Database design and optimization</li>
              </ul>
            </div>

            <div className="bg-slate-300 dark:bg-slate-800 p-10 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6 text-navy-500">Legacy System Modernization</h3>
              <p>
                Transform outdated systems into modern, supportable platforms while minimizing risk and downtime.
              </p>
              <br></br>
              <ul className="space-y-3">
                <li>• .NET Framework → .NET 8 migration</li>
                <li>• Monolith to microservices</li>
                <li>• Cloud migration (AWS)</li>
                <li>• Technical debt reduction</li>
              </ul>
            </div>

            <div className="bg-slate-300 dark:bg-slate-800 p-10 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6 text-navy-500">Application Maintenance & Support</h3>
              <p>
                Ongoing support, enhancements, and troubleshooting for existing applications.
              </p>
              <br></br>
              <ul className="space-y-3">
                <li>• Bug fixes and performance tuning</li>
                <li>• Security updates</li>
                <li>• Feature enhancements</li>
                <li>• Long-term application stewardship</li>
              </ul>
            </div>

            <div className="bg-slate-300 dark:bg-slate-800 p-10 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6 text-navy-500">AWS Cloud & Serverless Solutions</h3>
              <p>
                Cost-effective, scalable cloud-native architectures on AWS.
              </p>
              <br></br>
              <ul className="space-y-3">
                <li>• Lambda + API Gateway solutions</li>
                <li>• DynamoDB and data architecture</li>
                <li>• Infrastructure as Code</li>
                <li>• Monitoring and alerting</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;