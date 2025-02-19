import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../../../components/Navbar ";
import Footer from "../../../components/footer";
import { useRegisterUserMutation } from "../register/registerAPI"; // Adjust the import path
import Spinner from "../../../components/spinner";

interface FormData {
  username: string;
  email: string;
  password: string;
  dob: string;
  contact: string;
  full_name: string;
}

const RegisterPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    dob: "",
    contact: "",
    full_name: "",
  });

  const [registerUser, { data, isLoading, error }] = useRegisterUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await registerUser(formData).unwrap();
      setFormData({
        username: "",
        email: "",
        password: "",
        dob: "",
        contact: "",
        full_name: "",
      });
      navigate("/login"); // Navigate to login page after successful registration
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  const getErrorMessage = () => {
    if (error) {
      const errorDetail = (error as any)?.data?.detail;
      if (errorDetail?.includes("database integrity error")) {
        return "This account is already registered. Please log in.";
      }
      if (errorDetail === "Email already registered") {
        return "This account is already registered. Please log in.";
      }
      return `Registration failed: ${errorDetail || "Unknown error"}`;
    }
    return null;
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
            Create an Account
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center text-sm mt-1">
            Join MediCare Hospital Management System today
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {[
              { label: "Username", type: "text", name: "username" },
              { label: "Email", type: "email", name: "email" },
              { label: "Password", type: "password", name: "password" },
              { label: "Date of Birth", type: "date", name: "dob", max: today },
              { label: "Contact", type: "text", name: "contact" },
              { label: "Full Name", type: "text", name: "full_name" },
            ].map(({ label, type, name, max }) => (
              <div key={name}>
                <label className="block text-sm text-gray-700 dark:text-gray-300">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={formData[name as keyof FormData]}
                  onChange={handleChange}
                  max={max}
                  className="w-full px-3 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300 disabled:bg-blue-400 flex items-center justify-center"
            >
              {isLoading ? <Spinner /> : "Sign Up"}
            </button>
          </form>

          {error && (
            <p className="mt-4 text-center text-red-500 text-sm">
              {getErrorMessage()}
            </p>
          )}
          {data && (
            <p className="mt-4 text-center text-green-500 text-sm">
              Registration successful! Redirecting...
            </p>
          )}

          <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
