import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dashboard | MediCare Hospital";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Dashboard</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
        The system is currently under maintenance.
      </p>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        We are working hard to improve your experience. Please check back later.
      </p>
      <div className="mt-6">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
