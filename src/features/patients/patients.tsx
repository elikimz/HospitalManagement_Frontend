


// import React, { useState, useEffect } from 'react';
// import {
//   useGetPatientsQuery,
//   useUpdatePatientMutation,
//   useDeletePatientMutation,
// } from '../patients/patientsAPI';

// interface Patient {
//   id: number;
//   full_name: string;
//   dob: string;
//   contact: string;
// }

// const Patients: React.FC = () => {
//   const { data: patients, error, isLoading, refetch } = useGetPatientsQuery({});
//   const [updatePatient, { isLoading: isUpdating }] = useUpdatePatientMutation();
//   const [deletePatient, { isLoading: isDeleting }] = useDeletePatientMutation();

//   const [searchTerm, setSearchTerm] = useState('');
//   const [editPatientId, setEditPatientId] = useState<number | null>(null);
//   const [updatedData, setUpdatedData] = useState({ full_name: '', dob: '', contact: '' });

//   const formatDate = (dateString: string) => (dateString ? dateString.split('T')[0] : '');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       refetch();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [refetch]);

//   const handleEdit = (patient: Patient) => {
//     setEditPatientId(patient.id);
//     setUpdatedData({
//       full_name: patient.full_name || '',
//       dob: formatDate(patient.dob),
//       contact: patient.contact || '',
//     });
//   };

//   const handleUpdate = async (id: number) => {
//     try {
//       await updatePatient({ id, updatedData }).unwrap();
//       setEditPatientId(null);
//       refetch();
//     } catch (err) {
//       console.error('Failed to update patient:', err);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     try {
//       await deletePatient(id).unwrap();
//       refetch();
//     } catch (err) {
//       console.error('Failed to delete patient:', err);
//     }
//   };

//   const filteredPatients = patients?.filter((patient: Patient) =>
//     patient.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     patient.contact.includes(searchTerm)
//   );

//   if (isLoading) return <div>Loading patients...</div>;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   if (error) return <div>Error loading patients: {(error as any).message || 'Unknown error'}</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Patients</h1>
//       <input
//         type="text"
//         placeholder="Search by name or contact..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="border p-2 rounded mb-4 w-full"
//       />
//       <ul>
//         {filteredPatients?.map((patient: Patient) => (
//           <li key={patient.id} className="border p-4 mb-4 rounded-lg">
//             {editPatientId === patient.id ? (
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   value={updatedData.full_name || ''}
//                   onChange={(e) => setUpdatedData({ ...updatedData, full_name: e.target.value })}
//                   className="border p-2 rounded mb-2 w-full"
//                 />
//                 <input
//                   type="date"
//                   value={updatedData.dob || ''}
//                   onChange={(e) => setUpdatedData({ ...updatedData, dob: e.target.value })}
//                   className="border p-2 rounded mb-2 w-full"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Contact"
//                   value={updatedData.contact || ''}
//                   onChange={(e) => setUpdatedData({ ...updatedData, contact: e.target.value })}
//                   className="border p-2 rounded mb-2 w-full"
//                 />
//                 <button
//                   onClick={() => handleUpdate(patient.id)}
//                   className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//                   disabled={isUpdating}
//                 >
//                   {isUpdating ? 'Updating...' : 'Save'}
//                 </button>
//                 <button
//                   onClick={() => setEditPatientId(null)}
//                   className="bg-gray-500 text-white px-4 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             ) : (
//               <div>
//                 <p><strong>Name:</strong> {patient.full_name}</p>
//                 <p><strong>DOB:</strong> {formatDate(patient.dob)}</p>
//                 <p><strong>Contact:</strong> {patient.contact}</p>
//                 <button
//                   onClick={() => handleEdit(patient)}
//                   className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(patient.id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                   disabled={isDeleting}
//                 >
//                   {isDeleting ? 'Deleting...' : 'Delete'}
//                 </button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Patients;


// import React, { useState, useEffect } from 'react';
// import {
//   useGetPatientsQuery,
//   useUpdatePatientMutation,
//   useDeletePatientMutation,
// } from '../patients/patientsAPI';

// interface User {
//   id: number;
//   username: string;
//   email: string;
// }

// interface Patient {
//   id: number;
//   full_name: string;
//   dob: string;
//   contact: string;
//   user: User;
// }

// const Patients: React.FC = () => {
//   const { data: patients, error, isLoading, refetch } = useGetPatientsQuery({});
//   const [updatePatient, { isLoading: isUpdating }] = useUpdatePatientMutation();
//   const [deletePatient, { isLoading: isDeleting }] = useDeletePatientMutation();

//   const [searchTerm, setSearchTerm] = useState('');
//   const [editPatientId, setEditPatientId] = useState<number | null>(null);
//   const [updatedData, setUpdatedData] = useState({ full_name: '', dob: '', contact: '' });

//   const formatDate = (dateString: string) => (dateString ? dateString.split('T')[0] : '');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       refetch();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [refetch]);

//   const handleEdit = (patient: Patient) => {
//     setEditPatientId(patient.id);
//     setUpdatedData({
//       full_name: patient.full_name || '',
//       dob: formatDate(patient.dob),
//       contact: patient.contact || '',
//     });
//   };

//   const handleUpdate = async (id: number) => {
//     try {
//       await updatePatient({ id, updatedData }).unwrap();
//       setEditPatientId(null);
//       refetch();
//     } catch (err) {
//       console.error('Failed to update patient:', err);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     try {
//       await deletePatient(id).unwrap();
//       refetch();
//     } catch (err) {
//       console.error('Failed to delete patient:', err);
//     }
//   };

//   const filteredPatients = patients?.filter((patient: Patient) =>
//     patient.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     patient.contact.includes(searchTerm) ||
//     patient.user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     patient.user.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (isLoading) return <div>Loading patients...</div>;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   if (error) return <div>Error loading patients: {(error as any).message || 'Unknown error'}</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Patients</h1>
//       <input
//         type="text"
//         placeholder="Search by name, contact, username, or email..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="border p-2 rounded mb-4 w-full"
//       />
//       <ul>
//         {filteredPatients?.map((patient: Patient) => (
//           <li key={patient.id} className="border p-4 mb-4 rounded-lg">
//             {editPatientId === patient.id ? (
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   value={updatedData.full_name || ''}
//                   onChange={(e) => setUpdatedData({ ...updatedData, full_name: e.target.value })}
//                   className="border p-2 rounded mb-2 w-full"
//                 />
//                 <input
//                   type="date"
//                   value={updatedData.dob || ''}
//                   onChange={(e) => setUpdatedData({ ...updatedData, dob: e.target.value })}
//                   className="border p-2 rounded mb-2 w-full"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Contact"
//                   value={updatedData.contact || ''}
//                   onChange={(e) => setUpdatedData({ ...updatedData, contact: e.target.value })}
//                   className="border p-2 rounded mb-2 w-full"
//                 />
//                 <button
//                   onClick={() => handleUpdate(patient.id)}
//                   className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//                   disabled={isUpdating}
//                 >
//                   {isUpdating ? 'Updating...' : 'Save'}
//                 </button>
//                 <button
//                   onClick={() => setEditPatientId(null)}
//                   className="bg-gray-500 text-white px-4 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             ) : (
//               <div>
//                 <p><strong>Name:</strong> {patient.full_name}</p>
//                 <p><strong>DOB:</strong> {formatDate(patient.dob)}</p>
//                 <p><strong>Contact:</strong> {patient.contact}</p>
//                 <p><strong>Username:</strong> {patient.user.username}</p>
//                 <p><strong>Email:</strong> {patient.user.email}</p>
//                 <button
//                   onClick={() => handleEdit(patient)}
//                   className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(patient.id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                   disabled={isDeleting}
//                 >
//                   {isDeleting ? 'Deleting...' : 'Delete'}
//                 </button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Patients;



import React, { useState, useEffect } from 'react';
import {
  useGetPatientsQuery,
  useUpdatePatientMutation,
  useDeletePatientMutation,
} from '../patients/patientsAPI';

interface User {
  id: number;
  username: string;
  email: string;
}

interface Patient {
  id: number;
  full_name: string;
  dob: string;
  contact: string;
  user?: User; // Make user optional
}

const Patients: React.FC = () => {
  const { data: patients, error, isLoading, refetch } = useGetPatientsQuery({});
  const [updatePatient, { isLoading: isUpdating }] = useUpdatePatientMutation();
  const [deletePatient, { isLoading: isDeleting }] = useDeletePatientMutation();

  const [searchTerm, setSearchTerm] = useState('');
  const [editPatientId, setEditPatientId] = useState<number | null>(null);
  const [updatedData, setUpdatedData] = useState({ full_name: '', dob: '', contact: '' });

  const formatDate = (dateString: string) => (dateString ? dateString.split('T')[0] : '');

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000);

    return () => clearInterval(interval);
  }, [refetch]);

  const handleEdit = (patient: Patient) => {
    setEditPatientId(patient.id);
    setUpdatedData({
      full_name: patient.full_name || '',
      dob: formatDate(patient.dob),
      contact: patient.contact || '',
    });
  };

  const handleUpdate = async (id: number) => {
    try {
      await updatePatient({ id, updatedData }).unwrap();
      setEditPatientId(null);
      refetch();
    } catch (err) {
      console.error('Failed to update patient:', err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deletePatient(id).unwrap();
      refetch();
    } catch (err) {
      console.error('Failed to delete patient:', err);
    }
  };

  const filteredPatients = patients?.filter((patient: Patient) =>
    patient.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.contact.includes(searchTerm) ||
    (patient.user?.username || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (patient.user?.email || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div>Loading patients...</div>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (error) return <div>Error loading patients: {(error as any).message || 'Unknown error'}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Patients</h1>
      <input
        type="text"
        placeholder="Search by name, contact, username, or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
      />
      <ul>
        {filteredPatients?.map((patient: Patient) => (
          <li key={patient.id} className="border p-4 mb-4 rounded-lg">
            {editPatientId === patient.id ? (
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={updatedData.full_name || ''}
                  onChange={(e) => setUpdatedData({ ...updatedData, full_name: e.target.value })}
                  className="border p-2 rounded mb-2 w-full"
                />
                <input
                  type="date"
                  value={updatedData.dob || ''}
                  onChange={(e) => setUpdatedData({ ...updatedData, dob: e.target.value })}
                  className="border p-2 rounded mb-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Contact"
                  value={updatedData.contact || ''}
                  onChange={(e) => setUpdatedData({ ...updatedData, contact: e.target.value })}
                  className="border p-2 rounded mb-2 w-full"
                />
                <button
                  onClick={() => handleUpdate(patient.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  disabled={isUpdating}
                >
                  {isUpdating ? 'Updating...' : 'Save'}
                </button>
                <button
                  onClick={() => setEditPatientId(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <p><strong>Name:</strong> {patient.full_name}</p>
                <p><strong>DOB:</strong> {formatDate(patient.dob)}</p>
                <p><strong>Contact:</strong> {patient.contact}</p>
                <p><strong>Username:</strong> {patient.user?.username ?? 'N/A'}</p>
                <p><strong>Email:</strong> {patient.user?.email ?? 'N/A'}</p>
                <button
                  onClick={() => handleEdit(patient)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(patient.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  disabled={isDeleting}
                >
                  {isDeleting ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
