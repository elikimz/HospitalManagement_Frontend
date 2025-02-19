import { useState } from "react";
import { useLoginUserMutation } from "../login/loginAPI";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar ";
import Footer from "../../../components/footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiLoader } from "react-icons/fi"; // Spinner icon

const LoginPage = () => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      toast.success("✅ Login successful!");
      navigate("/dashboard");
    } catch (err: unknown) {
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
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96 border border-gray-300 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-100">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center"
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
