// import { useState } from "react";
// import { useLoginUserMutation } from "../login/loginAPI";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginUser, { isLoading, error }] = useLoginUserMutation();
//   const navigate = useNavigate();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("username", email);
//     formData.append("password", password);

//     try {
//       const response = await loginUser(formData).unwrap();
//       console.log("Login successful", response);
//       localStorage.setItem("token", response.access_token);
//       navigate("/dashboard"); // Navigate to a dashboard or main page after successful login
//     } catch (error) {
//       console.error("Login failed", error);
//     }
//   };

//   const handleForgotPassword = () => {
//     navigate("/forgot-password"); // Navigate to Forgot Password page
//   };

//   // Type narrowing for error object
//   const getErrorMessage = () => {
//     if ('data' in error) {
//       return error.data?.detail || "Login failed";
//     }
//     return "An unexpected error occurred";
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="text-red-500">{getErrorMessage()}</p>}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//             disabled={isLoading}
//           >
//             {isLoading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <button onClick={handleForgotPassword} className="text-blue-500 hover:underline">
//             Forgot Password?
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
