


import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 shadow-md bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl font-bold text-blue-600 dark:text-blue-300">
          <Link to="/"></Link>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300">
            Home
          </Link>
          <Link to="/features" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300">
            Features
          </Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300">
            Contact
          </Link>
          <Link to="/faq" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300">
            FAQ
          </Link>
        </div>

        {/* Sign Up & Login Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-100 dark:bg-gray-800 p-4`}>
        <Link to="/" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 py-2">
          Home
        </Link>
        <Link to="/features" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 py-2">
          Features
        </Link>
        <Link to="/about" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 py-2">
          About
        </Link>
        <Link to="/contact" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 py-2">
          Contact
        </Link>
        <Link to="/faq" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 py-2">
          FAQ
        </Link>
        {/* Mobile Sign Up & Login Buttons */}
        <div className="mt-4 space-y-2">
          <Link to="/login">
            <button className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
