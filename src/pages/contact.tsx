import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <section className="py-16 bg-gray-100" id="contact">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Have any questions or want to get in touch? Feel free to reach out to us through the following:
        </p>

        {/* Contact Info */}
        <div className="mt-8 text-left max-w-2xl mx-auto">
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Email:</strong> support@hospital.com
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Address:</strong> 123 Healthcare Ave, City, Country
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 text-left max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            We're here to help. Reach out with any questions or inquiries.
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-md"
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
