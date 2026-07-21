function About() {
  return (
    <div className="pt-20 bg-white dark:bg-gray-900 min-h-screen">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <h2 className="text-5xl font-bold font-heading text-center mb-12 text-gray-900 dark:text-white">
  About Alafour LLC
</h2>

          <div className="prose prose-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400 space-y-8">
            
            <p>
              Alafour LLC is a <strong>Woman-Owned Small Business</strong> inspired by Huntsville, Alabama — where the owner grew up. 
              Founded in June 2026 by Wendy Parker, Alafour delivers high-quality, reliable technology solutions with senior-level 
              expertise and strong project ownership.
            </p>

            <p>
              With over 20 years of hands-on experience in enterprise and government environments, we specialize in solving complex 
              technical challenges — from debugging and optimizing legacy systems to building secure, modern applications.
            </p>

            <p>
              <strong>What sets us apart:</strong>
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Deep expertise in identifying and resolving difficult code issues</li>
              <li>Strong focus on system security and performance optimization</li>
              <li>Proven government contracting experience</li>
              <li>AWS AI Practitioner certification</li>
              <li>Clear communication and commitment to long-term client success</li>
            </ul>

            <p className="font-medium text-primary-600 pt-4">
              Currently developing <strong>RequestFlow</strong> — an AI-powered full-stack application 
              built with modern technologies.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}

export default About;