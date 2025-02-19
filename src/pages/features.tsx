import Navbar from "../components/Navbar ";
import Footer from "../components/footer";

const Features = () => {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            Key Features of MediCare Hospital
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Experience the future of healthcare with our advanced hospital management system.
          </p>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Feature 1 - Patient Management */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4320/4320352.png"
                alt="Patient Management"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-4">
                Patient Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Streamline patient registration, records, and medical history tracking.
              </p>
            </div>

            {/* Feature 2 - Appointment Scheduling */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3068/3068421.png"
                alt="Appointments"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-4">
                Appointment Scheduling
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Manage doctor appointments efficiently with automated scheduling.
              </p>
            </div>

            {/* Feature 3 - Pharmacy Management */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2920/2920329.png"
                alt="Pharmacy Management"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-4">
                Pharmacy Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Keep track of medication inventory, prescriptions, and sales.
              </p>
            </div>

            {/* Feature 4 - Billing & Payments */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2838/2838779.png"
                alt="Billing & Payments"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-4">
                Billing & Payments
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Secure billing system with insurance claims & M-Pesa payments.
              </p>
            </div>

            {/* Feature 5 - Role-Based Access */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2589/2589175.png"
                alt="Role-Based Access"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-4">
                Role-Based Access
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Secure access control for Admins, Doctors, Nurses, and Patients.
              </p>
            </div>

            {/* Feature 6 - Reports & Analytics */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2436/2436638.png"
                alt="Reports & Analytics"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-4">
                Reports & Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Generate detailed reports on patient care, finances, and performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Features;
