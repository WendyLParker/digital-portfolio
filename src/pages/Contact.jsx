import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-3xl font-semibold mb-4">Let's Connect</p>
        <p className="text-gray-400 mb-10">
          Ready to discuss your project? Send us a message and we'll get back to you within 1-2 business days.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;