import Navbar from "../components/Navbar ";
import Footer from "../components/footer";

const About = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section with Background Banner */}
      <section
        className="bg-blue-600 text-white py-20"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_640.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            About Us
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Learn how MediCare Hospital is transforming healthcare with modern
            technology and compassionate care.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            At MediCare Hospital, our mission is to provide world-class medical
            care using innovative healthcare management systems to improve
            patient outcomes.
          </p>

          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mt-12">
            Our Vision
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We aim to revolutionize healthcare by integrating smart medical
            solutions, ensuring every patient receives efficient and quality
            treatment.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200">
            Meet Our Medical Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Our dedicated team of healthcare professionals is committed to
            providing top-tier medical services.
          </p>

          {/* Team Members */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Founder & Chief Medical Officer */}
            <div className="bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-lg">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Founder"
              />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-4">
                Dr. Kim
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Founder & Chief Medical Officer
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                Dr. Kim is a visionary healthcare leader dedicated to improving
                hospital operations through advanced technology and
                patient-centered care.
              </p>
            </div>

            {/* Head of Surgery */}
            <div className="bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-lg">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="Surgeon"
              />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-4">
                Dr. John Doe
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Head of Surgery</p>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                Dr. John specializes in minimally invasive surgeries and is at
                the forefront of modern surgical techniques.
              </p>
            </div>

            {/* Senior Pediatrician */}
            <div className="bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-lg">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/921/921490.png"
                alt="Pediatrician"
              />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-4">
                Dr. Sara Lee
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Senior Pediatrician
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                Dr. Sara is passionate about child healthcare, ensuring young
                patients receive the best medical attention.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
