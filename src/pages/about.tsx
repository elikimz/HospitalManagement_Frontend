const About = () => {
  return (
    <div>
      {/* Hero Section with Background Banner */}
      <section
        className="bg-blue-600 text-white py-20"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_640.jpg')", // Add your background image URL
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
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Our mission is to create a comprehensive, easy-to-use platform that enables healthcare professionals to manage their operations efficiently and provide the best care for patients.
          </p>

          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mt-12">Our Vision</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We envision a world where healthcare systems are fully integrated, accessible, and data-driven to improve the quality of care and streamline hospital operations globally.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">We are a group of passionate individuals dedicated to making healthcare management easier and more effective.</p>

          {/* Team Members */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-lg">
              <img className="w-24 h-24 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6z_QHY7OmujVRndKXeGEadI5vq_OvwB6XzA&s" alt="Team Member" />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-4">Jane Doe</h3>
              <p className="text-gray-600 dark:text-gray-400">CEO & Co-Founder</p>
              <p className="mt-4 text-gray-500 dark:text-gray-300">Jane leads the strategic direction of the company and ensures that our product remains at the forefront of healthcare management solutions.</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-lg">
              <img className="w-24 h-24 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQs4qkzJ_RTk4bgWrpAs-M47ZPOPICtd8GQ&s" alt="Team Member" />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-4">John Smith</h3>
              <p className="text-gray-600 dark:text-gray-400">CTO & Co-Founder</p>
              <p className="mt-4 text-gray-500 dark:text-gray-300">John oversees the development of our platform, ensuring it's built with the latest technology to deliver reliable and scalable solutions.</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-lg">
              <img className="w-24 h-24 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgA-arGhmNZsTGccGnJ1kct6N1F7vi8qJDwA&s" alt="Team Member" />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-4">Sara Lee</h3>
              <p className="text-gray-600 dark:text-gray-400">Lead Designer</p>
              <p className="mt-4 text-gray-500 dark:text-gray-300">Sara is responsible for the user experience and interface design, ensuring that the platform is both intuitive and user-friendly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;