

import { useEffect, useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { Bell, Calendar,Pill, LayoutDashboard, Menu, LogOut, FileText, User, ClipboardList } from "lucide-react";
import { useGetMeQuery } from "../features/auth/login/loginAPI"; 

const PatientDashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const { data,  isLoading } = useGetMeQuery(token);

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setSidebarOpen(false);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`fixed md:relative z-50 md:z-auto h-full bg-teal-800 text-white p-5 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-64`}>
                <h1 className="text-2xl font-bold mb-6">Patient Portal</h1>
                <ul className="space-y-4">
                    <li><Link to="/patient" className="block p-2 bg-teal-600 hover:bg-teal-700 rounded flex items-center" onClick={handleLinkClick}><LayoutDashboard className="mr-2" /> Dashboard</Link></li>
                    <li><Link to="/patient/account" className="block p-2 bg-teal-600 hover:bg-teal-700 rounded flex items-center" onClick={handleLinkClick}><User className="mr-2" /> My Account</Link></li>
                    <li><Link to="/patient/appointments" className="block p-2 bg-teal-600 hover:bg-teal-700 rounded flex items-center" onClick={handleLinkClick}><Calendar className="mr-2" /> Appointments</Link></li>
                    <li><Link to="/patient/prescriptions" className="block p-2 bg-teal-600 hover:bg-teal-700 rounded flex items-center" onClick={handleLinkClick}><Pill className="mr-2" /> Prescriptions</Link></li>
                    <li><Link to="/patient/payments" className="block p-2 bg-teal-600 hover:bg-teal-700 rounded flex items-center" onClick={handleLinkClick}><FileText className="mr-2" /> Payments</Link></li>
                    <li><Link to="/patient/receiptpage" className="block p-2 bg-teal-600 hover:bg-teal-700 rounded flex items-center" onClick={handleLinkClick}><ClipboardList className="mr-2" /> Receipts</Link></li>

                    <li>
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left p-2 bg-red-600 hover:bg-red-700 rounded flex items-center"
                        >
                            <LogOut className="mr-2" /> Logout
                        </button>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-10 bg-gray-50 overflow-auto border-l border-gray-200">
                <div className="flex justify-between items-center mb-8">
                    <button
                        className="md:hidden p-2 bg-teal-800 text-white rounded"
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                    >
                        <Menu />
                    </button>
                    <h2 className="text-3xl font-bold">
                        {isLoading ? "Loading..." : `Welcome, ${data?.username || 'Patient'}!`}
                    </h2>
                    <button className="flex items-center p-2 border border-gray-300 rounded hover:bg-gray-100">
                        <Bell className="mr-2" /> Notifications
                    </button>
                </div>

                {/* Frame for Main Content */}
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;
