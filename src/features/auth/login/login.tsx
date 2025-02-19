import { useState } from "react";
import { useLoginUserMutation } from "../login/loginAPI";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState(""); // ✅ Renamed from email to username
  const [password, setPassword] = useState("");
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting:", { username, password });
  
    // ✅ Ensure correct format for FastAPI OAuth2PasswordRequestForm
    const formData = new URLSearchParams();
    formData.append("grant_type", "password");
    formData.append("username", username); // ✅ Correct field name
    formData.append("password", password);
    formData.append("scope", ""); // ✅ Must be included, even if empty
    formData.append("client_id", ""); // ✅ Required but can be empty
    formData.append("client_secret", ""); // ✅ Required but can be empty
  
    try {
      const response = await loginUser(formData).unwrap();
      console.log("Login successful:", response);
      navigate("/dashboard");
    } catch (err: any) {
      console.error("Login error:", err);
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text" // ✅ Changed from email to text
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500">Login failed. Please check your credentials.</div>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button onClick={handleForgotPassword} className="text-blue-500 hover:underline">
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
