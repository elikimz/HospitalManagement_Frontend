


// import { useState, useEffect } from 'react';
// import { useGetPatientInfoQuery, useUpdatePatientInfoMutation } from '../features/auth/login/loginAPI';

// const MyAccount = () => {
//     const token = localStorage.getItem("token");
//     const { data, error, isLoading, refetch } = useGetPatientInfoQuery(token);
//     const [updatePatientInfo, { isLoading: isUpdating, isSuccess, isError }] = useUpdatePatientInfoMutation();
//     const [isEditing, setIsEditing] = useState(false);
//     const [formData, setFormData] = useState({
//         full_name: '',
//         dob: '',
//         contact: '',
//     });
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         const interval = setInterval(() => {
//             refetch();
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [refetch]);

//     useEffect(() => {
//         if (isSuccess) {
//             setMessage('Profile updated successfully!');
//             refetch();
//         } else if (isError) {
//             setMessage('Failed to update profile. Please try again.');
//         }
//     }, [isSuccess, isError, refetch]);

//     const handleEdit = () => {
//         if (data) {
//             setFormData({
//                 full_name: data.full_name,
//                 dob: data.dob.split('T')[0],
//                 contact: data.contact,
//             });
//             setIsEditing(true);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await updatePatientInfo({ token, ...formData }).unwrap();
//         } catch (err) {
//             console.error('Failed to update patient info:', err);
//         }
//     };

//     if (isLoading) {
//         return <div className="flex items-center justify-center h-full text-gray-600">Loading...</div>;
//     }

//     if (error) {
//         return <div className="flex items-center justify-center h-full text-red-600">Error loading user data</div>;
//     }

//     return (
//         <div className="max-w-3xl mx-auto p-6 md:p-10 bg-white rounded-lg shadow-lg border border-teal-300">
//             <h1 className="text-4xl font-bold text-teal-700 mb-8">My Profile</h1>
//             {message && (
//                 <div className={`mb-4 p-3 rounded-lg ${isSuccess ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
//                     {message}
//                 </div>
//             )}
//             <div className="space-y-8">
//                 <div className="border-b pb-6">
//                     <h2 className="text-2xl font-semibold text-gray-800">Profile Details</h2>
//                     {isEditing ? (
//                         <form onSubmit={handleSubmit} className="mt-4 text-gray-700 space-y-6">
//                             <div>
//                                 <label className="block text-lg font-medium text-teal-600">Full Name</label>
//                                 <input
//                                     type="text"
//                                     name="full_name"
//                                     value={formData.full_name}
//                                     onChange={handleChange}
//                                     className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-lg font-medium text-teal-600">Date of Birth</label>
//                                 <input
//                                     type="date"
//                                     name="dob"
//                                     value={formData.dob}
//                                     onChange={handleChange}
//                                     className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-lg font-medium text-teal-600">Contact</label>
//                                 <input
//                                     type="text"
//                                     name="contact"
//                                     value={formData.contact}
//                                     onChange={handleChange}
//                                     className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
//                                 />
//                             </div>
//                             <div className="flex justify-end space-x-4">
//                                 <button
//                                     type="submit"
//                                     className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 flex items-center"
//                                     disabled={isUpdating}
//                                 >
//                                     {isUpdating ? (
//                                         <>
//                                             <span className="mr-2">Updating...</span>
//                                             <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full" role="status">
//                                             </div>
//                                         </>
//                                     ) : (
//                                         'Save'
//                                     )}
//                                 </button>
//                                 <button
//                                     type="button"
//                                     onClick={() => setIsEditing(false)}
//                                     className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
//                                     disabled={isUpdating}
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </form>
//                     ) : (
//                         <div className="mt-4 text-gray-700 space-y-2">
//                             <p><strong>Name:</strong> {data.full_name}</p>
//                             <p><strong>Date of Birth:</strong> {new Date(data.dob).toLocaleDateString()}</p>
//                             <p><strong>Contact:</strong> {data.contact}</p>
//                             <p><strong>Email:</strong> {data.user.email}</p>
//                             <p><strong>Role:</strong> {data.user.role}</p>
//                             <button
//                                 onClick={handleEdit}
//                                 className="mt-4 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500"
//                             >
//                                 Edit
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MyAccount;



import  { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useGetPatientInfoQuery, useUpdatePatientInfoMutation } from '../features/auth/login/loginAPI';

const MyAccount = () => {
    const token = localStorage.getItem("token");
    const { data, error, isLoading, refetch } = useGetPatientInfoQuery(token);
    const [updatePatientInfo, { isLoading: isUpdating, isSuccess, isError }] = useUpdatePatientInfoMutation();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        full_name: '',
        dob: '',
        contact: '',
    });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            refetch();
        }, 5000);

        return () => clearInterval(interval);
    }, [refetch]);

    useEffect(() => {
        if (isSuccess) {
            setMessage('Profile updated successfully!');
            refetch();
        } else if (isError) {
            setMessage('Failed to update profile. Please try again.');
        }
    }, [isSuccess, isError, refetch]);

    const handleEdit = () => {
        if (data) {
            setFormData({
                full_name: data.full_name,
                dob: data.dob.split('T')[0],
                contact: data.contact,
            });
            setIsEditing(true);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await updatePatientInfo({ token, ...formData }).unwrap();
        } catch (err) {
            console.error('Failed to update patient info:', err);
        }
    };

    if (isLoading) {
        return <div className="flex items-center justify-center h-full text-gray-600">Loading...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center h-full text-red-600">Error loading user data</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6 md:p-10 bg-white rounded-lg shadow-lg border border-teal-300">
            <h1 className="text-4xl font-bold text-teal-700 mb-8">My Profile</h1>
            {message && (
                <div className={`mb-4 p-3 rounded-lg ${isSuccess ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {message}
                </div>
            )}
            <div className="space-y-8">
                <div className="border-b pb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Profile Details</h2>
                    {isEditing ? (
                        <form onSubmit={handleSubmit} className="mt-4 text-gray-700 space-y-6">
                            <div>
                                <label className="block text-lg font-medium text-teal-600">Full Name</label>
                                <input
                                    type="text"
                                    name="full_name"
                                    value={formData.full_name}
                                    onChange={handleChange}
                                    className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium text-teal-600">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium text-teal-600">Contact</label>
                                <input
                                    type="text"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 flex items-center"
                                    disabled={isUpdating}
                                >
                                    {isUpdating ? (
                                        <>
                                            <span className="mr-2">Updating...</span>
                                            <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full" role="status">
                                            </div>
                                        </>
                                    ) : (
                                        'Save'
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                    disabled={isUpdating}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="mt-4 text-gray-700 space-y-2">
                            <p><strong>Name:</strong> {data.full_name}</p>
                            <p><strong>Date of Birth:</strong> {new Date(data.dob).toLocaleDateString()}</p>
                            <p><strong>Contact:</strong> {data.contact}</p>
                            <p><strong>Email:</strong> {data.user.email}</p>
                            <p><strong>Role:</strong> {data.user.role}</p>
                            <button
                                onClick={handleEdit}
                                className="mt-4 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500"
                            >
                                Edit
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
