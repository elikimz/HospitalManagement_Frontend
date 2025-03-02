import { useState } from "react";
import { useVerifyOtpResetPasswordMutation } from "../login/loginAPI";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../../components/Navbar ";
import Footer from "../../../components/footer";

export function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifyOtpResetPassword] = useVerifyOtpResetPasswordMutation();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Get email from state (passed from forgot password page)
  const email = location.state?.email || "";

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    console.log("Verifying OTP for email:", email);

    try {
      const response = await verifyOtpResetPassword({ email, otp, new_password: newPassword }).unwrap();
      console.log("Password reset successful:", response);
      setMessage("Password reset successful! You can now log in.");
      setIsSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("OTP verification failed:", error);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorMsg = (error as any)?.data?.detail || "Invalid OTP or password reset failed.";
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
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Verify OTP & Reset Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
                "Verify & Reset Password"
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

export default VerifyOtp;
