function About() {
  return (
    <div className="pt-20 bg-white dark:bg-gray-900 min-h-screen">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <h2 className="text-5xl font-bold text-center mb-12">About Alafour LLC</h2>

          <div className="prose prose-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400 space-y-8">
            <p>
              Alafour LLC is a <strong>Woman-Owned Small Business</strong> founded in June 2026 by Wendy Parker.
              With over 20 years of hands-on full-stack development experience, I specialize in delivering 
              reliable, secure, and scalable software solutions for government and enterprise clients.
            </p>

            <p>
              My background includes enterprise application development, system modernization, 
              AWS serverless architectures, and large-scale data migrations.
            </p>

            <p>
              At Alafour LLC, I focus on custom software development, application maintenance, 
              integrations, and modernization projects. I bring deep technical expertise combined 
              with the personal accountability that comes from owning the business.
            </p>

            <p className="font-medium text-primary-600">
              Currently developing <strong>RequestFlow</strong> — an AI-powered full-stack application 
              built with React, .NET, and AI integration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;