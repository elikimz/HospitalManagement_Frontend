import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetPrescriptionsQuery } from '../features/prescriptions/prescriptionsAPI';
// import { ClipLoader } from 'react-spinners';

interface Prescription {
  id: number;
  doctor_id: number;
  patient_id: number;
  medicine_id: number;
  patient_name: string;
  medicine_name: string;
  dosage: string;
  created_at: string;
}

const PrescriptionList = () => {
  const { data: prescriptions, error, isLoading } = useGetPrescriptionsQuery([]);

  useEffect(() => {
    if (error) {
      toast.error('Failed to load prescriptions.');
    }
  }, [error]);

  if (isLoading) return <div className="text-center text-gray-500">Loading prescriptions...</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Prescription List</h1>

      {prescriptions && prescriptions.length > 0 ? (
        <ul className="space-y-6">
          {prescriptions.map((prescription: Prescription) => (
            <li key={prescription.id} className="border p-6 rounded-lg shadow-sm bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col">
                <strong className="text-gray-600">Prescription ID</strong>
                <p>{prescription.id}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Doctor ID</strong>
                <p>{prescription.doctor_id}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Patient ID</strong>
                <p>{prescription.patient_id}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Medicine ID</strong>
                <p>{prescription.medicine_id}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Patient Name</strong>
                <p>{prescription.patient_name}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Medicine Name</strong>
                <p>{prescription.medicine_name}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Dosage</strong>
                <p>{prescription.dosage}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Created At</strong>
                <p>{new Date(prescription.created_at).toLocaleString()}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No prescriptions found for this patient.</p>
      )}
    </div>
  );
};

export default PrescriptionList;
