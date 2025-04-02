import { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "../components/Navbar ";
import Footer from "../components/footer";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccessMessage("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSuccessMessage(""), 3000); // Hide after 3 seconds
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-grow py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Contact Us
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-lg">
              Have questions? Feel free to reach out, and we will get back to
              you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8"
          >
            {successMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-4 p-3 text-green-700 bg-green-100 rounded-lg text-center"
              >
                {successMessage}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium text-lg rounded-lg transition-all duration-200"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
