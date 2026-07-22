import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://4i0b05hmrh.execute-api.us-east-1.amazonaws.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('✅ Thank you! Your message has been sent successfully.');
        reset(); // Clear the form
      } else {
        setStatus('❌ ' + (result.message || 'Failed to send message.'));
      }
    } catch (error) {
      setStatus('❌ Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white mb-2">
            Your Name
          </label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-2xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-white mb-2">
            Email Address
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email',
              },
            })}
            className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-2xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition"
            placeholder="you@company.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-white mb-2">
          Message
        </label>
        <textarea
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 20, message: 'Message should be at least 20 characters long' },
          })}
          rows="6"
          className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-3xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition resize-y"
          placeholder="Tell us about your project or how we can help..."
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition py-4 rounded-2xl font-semibold text-lg mt-4 flex items-center justify-center text-white"
      >
        {loading ? 'Connection Happening...' : 'Connect Now'}
      </button>

      {status && (
        <p className={`text-center mt-4 font-medium ${status.includes('✅') ? 'text-green-600' : 'text-red-500'}`}>
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;