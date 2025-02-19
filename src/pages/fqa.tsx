import { useState } from "react";
import Navbar from "../components/Navbar ";
import Footer from "../components/footer";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What are the hospital's visiting hours?",
    answer:
      "Visiting hours are from 10:00 AM to 8:00 PM daily. Some wards may have specific visiting times, so please check with the reception.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment online through our website, via our mobile app, or by calling our reception desk at +254 700 123 456.",
  },
  {
    question: "Do you accept insurance payments?",
    answer:
      "Yes, we accept a wide range of insurance providers. Please check with our billing department to confirm if your insurance is accepted.",
  },
  {
    question: "What emergency services do you offer?",
    answer:
      "We provide 24/7 emergency services, including ambulance support, trauma care, and critical care for severe medical conditions.",
  },
  {
    question: "How can I access my medical records?",
    answer:
      "You can request your medical records from our records department or access them through our patient portal after verification.",
  },
  {
    question: "What specialists are available at the hospital?",
    answer:
      "We have a team of specialists in various fields, including cardiology, orthopedics, neurology, pediatrics, and general medicine.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <section className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
            Find answers to common questions about our hospital and services.
          </p>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-gray-600 dark:text-gray-400 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
