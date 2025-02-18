const About = () => {
  return (
    <div>
      {/* Hero Section with Background Banner */}
      <section
        className="bg-blue-600 text-white py-20"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/482858629/photo/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed.jpg?s=612x612&w=0&k=20&c=unfa1VMpYQGt3PyrkuvxN1JkX7FRk-w0knEFCqjTugg=')", // Add your background image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            About Us
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Learn more about our mission and how we are transforming healthcare management.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-700">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our mission is to create a comprehensive, easy-to-use platform that enables healthcare professionals to manage their operations efficiently and provide the best care for patients.
          </p>

          <h2 className="text-3xl font-semibold text-gray-700 mt-12">Our Vision</h2>
          <p className="mt-4 text-lg text-gray-600">
            We envision a world where healthcare systems are fully integrated, accessible, and data-driven to improve the quality of care and streamline hospital operations globally.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-700">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">We are a group of passionate individuals dedicated to making healthcare management easier and more effective.</p>

          {/* Team Members */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img className="w-24 h-24 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Team Member" />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Jane Doe</h3>
              <p className="text-gray-600">CEO & Co-Founder</p>
              <p className="mt-4 text-gray-500">Jane leads the strategic direction of the company and ensures that our product remains at the forefront of healthcare management solutions.</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img className="w-24 h-24 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Team Member" />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">John Smith</h3>
              <p className="text-gray-600">CTO & Co-Founder</p>
              <p className="mt-4 text-gray-500">John oversees the development of our platform, ensuring it's built with the latest technology to deliver reliable and scalable solutions.</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img className="w-24 h-24 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Team Member" />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Sara Lee</h3>
              <p className="text-gray-600">Lead Designer</p>
              <p className="mt-4 text-gray-500">Sara is responsible for the user experience and interface design, ensuring that the platform is both intuitive and user-friendly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
