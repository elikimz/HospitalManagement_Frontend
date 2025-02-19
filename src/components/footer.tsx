import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Hospital Info Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yellow-400">MediCare Hospital</h3>
            <p className="text-gray-400 dark:text-gray-300">
              Providing exceptional healthcare services with modern medical facilities and a dedicated team of professionals.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start space-x-4">
              <Link to="#about" className="text-gray-300 hover:text-yellow-500">About Us</Link>
              <Link to="#privacy" className="text-gray-300 hover:text-yellow-500">Privacy Policy</Link>
              <Link to="#terms" className="text-gray-300 hover:text-yellow-500">Terms of Service</Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yellow-400">Quick Links</h3>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <a href="/" className="text-gray-300 hover:text-yellow-500">Home</a>
              <a href="services" className="text-gray-300 hover:text-yellow-500">Our Services</a>
              <a href="about" className="text-gray-300 hover:text-yellow-500">About</a>
              <a href="contact" className="text-gray-300 hover:text-yellow-500">Contact</a>
              <a href="faq" className="text-gray-300 hover:text-yellow-500">FAQ</a>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yellow-400">Contact Us</h3>
            <p className="text-gray-400 dark:text-gray-300">We are here to assist you with any inquiries or medical needs.</p>
            <p className="text-gray-300">Email: info@medicarehospital.com</p>
            <p className="text-gray-300">Phone: +254 700 123 456</p>
            <p className="text-gray-300">Location: Nairobi, Kenya</p>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-yellow-400">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400">Stay updated with the latest news and health tips from MediCare Hospital.</p>
          <div className="mt-4 flex flex-col md:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-gray-700 text-white rounded-t-md md:rounded-l-md md:rounded-t-none focus:outline-none"
            />
            <button className="px-6 py-2 bg-yellow-500 text-black rounded-b-md md:rounded-r-md md:rounded-b-none hover:bg-yellow-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright and Credit Section */}
      <div className="mt-12 text-center text-gray-400">
        <p>&copy; 2025 MediCare Hospital. All rights reserved.</p>
        <p className="text-sm mt-2">
          Powered by <a href="https://kimtech.site" target="_blank" rel="noopener noreferrer" className="text-yellow-400 font-semibold hover:underline">Kimtech.Site</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
