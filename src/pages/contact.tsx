import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <section id="contact" className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-lg mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Get in Touch</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          Reach out to us for any inquiries or assistance.
        </p>

        <div className="mt-6 text-left">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
