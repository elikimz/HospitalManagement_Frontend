
import { useGetMeQuery } from '../features/auth/login/loginAPI';

const MyAccount = () => {
    const token = localStorage.getItem("token");
    const { data, error, isLoading } = useGetMeQuery(token);

    if (isLoading) {
        return <div className="flex items-center justify-center h-full text-gray-600">Loading...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center h-full text-red-600">Error loading user data</div>;
    }

    return (
        <div className="p-6 md:p-10 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-teal-800 mb-6">My Account</h1>
            <div className="space-y-6">
                <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
                    <div className="mt-2 text-gray-700">
                        <p><strong>Name:</strong> {data.username}</p>
                        <p><strong>Email:</strong> {data.email}</p>
                    </div>
                </div>
                <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Account Details</h2>
                    <div className="mt-2 text-gray-700">
                        <p><strong>Role:</strong> {data.role}</p>
                        {/* Add more fields as needed */}
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Preferences</h2>
                    <div className="mt-2 text-gray-700">
                        <p><strong>Notification Preferences:</strong> Enabled</p>
                        <p><strong>Language:</strong> English</p>
                        {/* Add more preferences as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
