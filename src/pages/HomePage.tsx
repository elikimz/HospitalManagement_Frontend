import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar ";
import Footer from "../components/footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 px-6 sm:px-8 md:px-12 text-center">
        <div className="max-w-3xl">
          <h1 className="text-3xl  sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Welcome to MediCare Hospital Management System
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
            Manage patients, appointments, billing, pharmacy, and more with ease.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
          >
            Get Started
          </button>
        </div>

        {/* Hero Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdkeIn3fxCQk6OP1ZuW9ZVyB9G1syLA12Bkw&s" 
              alt="Appointments" 
              className="w-full h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">Easy Appointments</h3>
              <p className="text-gray-600 mt-2">Schedule and manage doctor appointments with ease.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSky30IeTbM7uaTFPADswQUiPKc8IsRDOUGjQ&s" 
              alt="Billing" 
              className="w-full h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">Secure Billing</h3>
              <p className="text-gray-600 mt-2">Handle billing and payments securely and efficiently.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW82of9ZNMwIu7RW6H1R84Y9weFSsCPSJ53w&s" 
              alt="Pharmacy" 
              className="w-full h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">Pharmacy Services</h3>
              <p className="text-gray-600 mt-2">Get easy access to prescribed medications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Our Hospital Services
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Appointments */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Le5K6q31ed-pOlB8bMSJZGK5Sk0vHJFGNA&s"
                alt="Appointments"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Appointments</h3>
                <p className="text-gray-600 mt-2">
                  Easily schedule and manage doctor appointments online.
                </p>
              </div>
            </div>

            {/* Pharmacy */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://www.businessdailyafrica.com/resource/image/4942180/landscape_ratio3x2/1620/1080/8c3a0367c014374d8179342e1b4624d2/Ja/goodlife.jpg"
                alt="Pharmacy"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Pharmacy</h3>
                <p className="text-gray-600 mt-2">
                  Get access to prescription medicines and pharmacy services.
                </p>
              </div>
            </div>

            {/* Emergency Services */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://media.edinburgh.org/wp-content/uploads/2023/06/23155619/ian-taylor-4hWvAJP8ofM-unsplash-1620x1080.jpg"
                alt="Emergency"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Emergency Services</h3>
                <p className="text-gray-600 mt-2">
                  24/7 emergency care with specialized medical attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
