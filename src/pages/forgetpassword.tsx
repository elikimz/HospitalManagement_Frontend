import { useRequestPasswordResetMutation } from "../features/auth/login/loginAPI";
import { useState } from "react";
import Navbar from "../components/Navbar ";
import Footer from "../components/footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [requestPasswordReset, { isLoading }] = useRequestPasswordResetMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await requestPasswordReset({ email }).unwrap();
      console.log("Response:", response); // Debugging output
      toast.success("✅ Password reset link sent! Check your email.");
      setEmail(""); // ✅ Clear input after success
    } catch (err: any) {
      console.error("Error sending password reset request:", err);
      toast.error(`❌ Failed to send password reset request: ${err.data?.detail || "Try again later."}`);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96 border border-gray-300 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-100">
            Forgot Password
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="border-t-2 border-white border-solid rounded-full w-5 h-5 animate-spin"></span>
              ) : (
                "Request Password Reset"
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgetPassword;
