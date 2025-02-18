import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(false); // Default theme is light mode
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl font-bold text-blue-500 dark:text-blue-300">
          <a href="/">HospitalSystem</a>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300">Home</a>
          <a href="#features" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300">Features</a>
          <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300">About</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300">Contact</a>
          <a href="#faq" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300">FAQ</a>
        </div>

        {/* Toggle Button for Dark/Light Mode */}
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center cursor-pointer">
            <span className="text-gray-700 dark:text-gray-200">🌙</span>
            <input
              type="checkbox"
              className="hidden"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <span className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full relative inline-block transition-all duration-300">
              <span
                className={`w-6 h-6 bg-white rounded-full absolute top-0 left-0 transition-all duration-300 ${isDarkMode ? "transform translate-x-full" : ""}`}></span>
            </span>
            <span className="text-gray-700 dark:text-gray-200">☀️</span>
          </label>
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
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-100 dark:bg-gray-800 p-4`}>
        <a href="#home" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300 py-2">Home</a>
        <a href="#features" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300 py-2">Features</a>
        <a href="#about" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300 py-2">About</a>
        <a href="#contact" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300 py-2">Contact</a>
        <a href="#faq" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300 py-2">FAQ</a>
      </div>
    </nav>
  );
};

export default Navbar;
