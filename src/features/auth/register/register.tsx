/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/RegisterPage.tsx

import React, { useState } from 'react';
import { useRegisterUserMutation } from '../register/registerAPI'; // Adjust the import path as needed

interface FormData {
  username: string;
  email: string;
  password: string;
  dob: string;
  contact: string;
  full_name: string;
}

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    dob: '',
    contact: '',
    full_name: '',
  });

  const [registerUser, { data, isLoading, error }] = useRegisterUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await registerUser(formData).unwrap();
      // Optionally, redirect the user or clear the form on success
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  // Determine the error message to display based on error detail.
  const getErrorMessage = () => {
    if (error) {
      const errorDetail = (error as any)?.data?.detail;
      // Check for a database integrity error and convert it to a user-friendly message.
      if (errorDetail && errorDetail.includes("database integrity error")) {
        return "This email is already registered. Please log in.";
      }
      // Check for a specific error message for already registered email.
      if (errorDetail === "Email already registered") {
        return "This email is already registered. Please log in.";
      }
      return `Registration failed: ${errorDetail || 'Unknown error'}`;
    }
    return null;
  };

  // Get today's date in YYYY-MM-DD format for the max attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
              max={today} // Prevents selecting a future date
            />
          </div>
          <div>
            <label className="block text-gray-700">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        {error && (
          <p className="mt-4 text-center text-red-500">
            {getErrorMessage()}
          </p>
        )}
        {data && (
          <p className="mt-4 text-center text-green-500">
            Registration successful!
          </p>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
