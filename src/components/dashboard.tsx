


import { useEffect, useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { Bell, Calendar, ClipboardList, Users, Pill, LayoutDashboard, Menu, LogOut, BriefcaseIcon, FileText } from "lucide-react";

const StaffDashboard = () => {
    const [role, setRole] = useState<string | null>(null);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = JSON.parse(atob(token.split(".")[1]));
            setRole(payload.role);
        }
    }, []);

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
            <div className={`fixed md:relative z-50 md:z-auto h-full bg-blue-900 text-white p-5 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-64`}>
                <h1 className="text-2xl font-bold mb-6">Hospital Admin</h1>
                <ul className="space-y-4">
                    <li><Link to="/dashboard" className="block p-2 bg-blue-700 hover:bg-blue-800 rounded flex items-center" onClick={handleLinkClick}><LayoutDashboard className="mr-2" /> Dashboard</Link></li>
                    <li><Link to="/dashboard/appointments" className="block p-2 bg-blue-700 hover:bg-blue-800 rounded flex items-center" onClick={handleLinkClick}><Calendar className="mr-2" /> Appointments</Link></li>
                    <li><Link to="/dashboard/patients" className="block p-2 bg-blue-700 hover:bg-blue-800 rounded flex items-center" onClick={handleLinkClick}><Users className="mr-2" /> Patients</Link></li>
                    <li><Link to="/dashboard/staff" className="block p-2 bg-blue-700 hover:bg-blue-800 rounded flex items-center" onClick={handleLinkClick}><BriefcaseIcon className="mr-2" /> Staff</Link></li>
                    <li><Link to="/dashboard/prescriptions" className="block p-2 bg-blue-700 hover:bg-blue-800 rounded flex items-center" onClick={handleLinkClick}><FileText className="mr-2" /> Prescription</Link></li>
                    <li><Link to="/dashboard/pharmacy" className="block p-2 bg-blue-700 hover:bg-blue-800 rounded flex items-center" onClick={handleLinkClick}><Pill className="mr-2" /> Pharmacy</Link></li>
                    <li><Link to="/dashboard/reports" className="block p-2 bg-blue-700 hover:bg-blue-800 rounded flex items-center" onClick={handleLinkClick}><ClipboardList className="mr-2" /> Reports</Link></li>
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
            <div className="flex-1 p-4 md:p-10 bg-gray-100 overflow-auto border-l border-gray-300">
                <div className="flex justify-between items-center mb-8">
                    <button
                        className="md:hidden p-2 bg-blue-900 text-white rounded"
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                    >
                        <Menu />
                    </button>
                    <h2 className="text-3xl font-bold">Welcome, {role || 'Staff'}!</h2>
                    <button className="flex items-center p-2 border border-gray-300 rounded hover:bg-gray-200">
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

export default StaffDashboard;
