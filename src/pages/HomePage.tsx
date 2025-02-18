import Navbar from '../components/Navbar ';
import Footer from '../components/footer';
import About from './about';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Background Banner */}
      <section
        id="home"
        className="bg-blue-600 text-white py-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=600')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to the Hospital Management System
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Manage patients, appointments, billing, pharmacy, and more with ease.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-200">Key Features</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Our system offers various features to improve hospital management and patient care.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Patient Management</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Keep track of patient records, appointments, and medical history easily.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Appointment Booking</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Book, cancel, and manage appointments with doctors seamlessly.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Pharmacy Management</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Manage prescriptions and stock levels efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About /> {/* Inserting the About component here */}
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to get started with our Hospital Management System?
          </h2>
          <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer /> {/* Adding the Footer component */}
    </div>
  );
};

export default Home;
