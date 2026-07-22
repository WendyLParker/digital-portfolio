import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="pt-20 bg-white dark:bg-gray-900 min-h-screen">
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-heading mb-6 text-navy-500 dark:text-white">
              Connect With Us!
            </h2>
            <p className="text-xl text-navy-500 dark:text-slate-400 max-w-lg mx-auto">
              Ready to discuss your project?
            </p>
          </div>

          <div className="bg-gray-500 dark:bg-slate-800 p-12 md:p-16 rounded-3xl shadow-sm">
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;