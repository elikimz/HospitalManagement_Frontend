import { useState } from "react";
import { useRequestPasswordResetMutation } from "../login/loginAPI";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar ";
import Footer from "../../../components/footer";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [requestPasswordReset] = useRequestPasswordResetMutation();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    console.log("Requesting OTP for email:", email);

    try {
      const response = await requestPasswordReset({ email }).unwrap();
      console.log("OTP request successful:", response);
      setMessage(response.message || "OTP sent to your email.");
      setIsSuccess(true);

      // Navigate to the verify OTP page after success
      setTimeout(() => {
        navigate("/verify-otp", { state: { email } });
      }, 1500);
    } catch (error) {
      console.error("OTP request failed:", error);
      const errorMsg =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (error as any)?.data?.detail?.[0]?.msg || 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (error as any)?.message || 
      "Something went wrong";
      setMessage(errorMsg);
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Forgot Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
              ) : (
                "Send OTP"
              )}
            </button>
          </form>

          {message && (
            <div
              className={`mt-4 p-3 text-center rounded-lg ${
                isSuccess ? "bg-green-100 text-green-700 border border-green-400" : "bg-red-100 text-red-700 border border-red-400"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
