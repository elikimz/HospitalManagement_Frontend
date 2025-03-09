

import  { useState } from "react";
import { useLoginUserMutation } from "../login/loginAPI";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar ";
import Footer from "../../../components/footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiLoader, FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Submitting:", { username, password });

    const formData = new URLSearchParams();
    formData.append("grant_type", "password");
    formData.append("username", username);
    formData.append("password", password);
    formData.append("scope", "");
    formData.append("client_id", "");
    formData.append("client_secret", "");

    try {
      const response = await loginUser(formData).unwrap();
      console.log("Login successful:", response);

      // Save token and get role
      const token = response.access_token;
      localStorage.setItem("token", token);

      // Decode the token to extract the payload
      const payload = JSON.parse(atob(token.split(".")[1]));
      console.log("Decoded payload:", payload); // Debugging line

      const userRole = payload.role;
      console.log("User role:", userRole); // Debugging line

      toast.success("✅ Login successful!");

      // Redirect based on role
      if (userRole.toLowerCase() === "patient") {
        console.log("Navigating to patient-dashboard"); // Debugging line
        navigate("/patient");
      } else {
        console.log("Navigating to dashboard"); // Debugging line
        navigate("/dashboard");
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error("Login error:", err.message);
        toast.error(`❌ Login failed: ${err.message}`);
      } else {
        console.error("Login error:", err);
        toast.error("❌ Login failed. Please check your credentials.");
      }
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-full shadow-lg w-96 h-96 flex flex-col items-center justify-center border border-gray-300">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="w-full max-w-xs">
            <div className="mb-4 relative">
              <label className="block text-gray-700">Username</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-3 py-2 pl-10 border rounded-full focus:outline-none bg-transparent"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-500" />
                </div>
              </div>
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 pl-10 border rounded-full focus:outline-none bg-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-gray-500" />
                </div>
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff className="text-gray-500" /> : <FiEye className="text-gray-500" />}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <FiLoader className="animate-spin text-white" />
                  Logging in...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div className="mt-4 text-center">
            <button onClick={handleForgotPassword} className="text-blue-500 hover:underline">
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
