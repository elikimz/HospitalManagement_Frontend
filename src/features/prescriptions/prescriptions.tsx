


import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useCreatePrescriptionMutation,
  useGetPrescriptionByIdQuery,
  useUpdatePrescriptionMutation,
  useDeletePrescriptionMutation,

} from '../prescriptions/prescriptionsAPI';
import { useGetPatientsQuery } from '../patients/patientsAPI';
import { useGetMedicinesQuery } from '../phamacy/phamacyAPI';
interface FormData {
  patient_name: string;
  medicine_name: string;
  dosage: string;
}

interface Patient {
  id: number;
  full_name: string;
  dob: string;
  contact: string;
  user: {
    username: string;
    email: string;
    id: number;
  };
}

interface Medicine {
  id: number;
  name: string;
  stock: number;
  price: number;
  created_at: string;
}

const PrescriptionManagement = () => {
  const [createPrescription] = useCreatePrescriptionMutation();
  const [updatePrescription] = useUpdatePrescriptionMutation();
  const [deletePrescription] = useDeletePrescriptionMutation();
  const { data: patients, isLoading: isLoadingPatients } = useGetPatientsQuery([]);
  const { data: medicines, isLoading: isLoadingMedicines } = useGetMedicinesQuery([]);

  const [formData, setFormData] = useState<FormData>({
    patient_name: '',
    medicine_name: '',
    dosage: '',
  });

  const [prescriptionId, setPrescriptionId] = useState<number | null>(null);
  const [inputId, setInputId] = useState<string>('');
  const { data: prescription, error, isLoading, refetch } = useGetPrescriptionByIdQuery(prescriptionId, { skip: !prescriptionId });
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingLoad, setLoadingLoad] = useState(false);

  useEffect(() => {
    if (prescription) {
      setFormData({
        patient_name: prescription.patient_name,
        medicine_name: prescription.medicine_name,
        dosage: prescription.dosage,
      });
    }
  }, [prescription]);

  const handleCreate = async () => {
    setLoadingCreate(true);
    try {
      await createPrescription(formData).unwrap();
      toast.success('Prescription created successfully!');
      resetForm();
    } catch (error) {
      toast.error('Failed to create prescription');
    } finally {
      setLoadingCreate(false);
    }
  };

  const handleUpdate = async () => {
    if (prescriptionId) {
      setLoadingUpdate(true);
      try {
        await updatePrescription({ id: prescriptionId, updatedData: formData }).unwrap();
        toast.success('Prescription updated successfully!');
        resetForm();
        setPrescriptionId(null);
        refetch(); // Refetch updated data
      } catch (error) {
        toast.error('Failed to update prescription');
      } finally {
        setLoadingUpdate(false);
      }
    }
  };

  const handleDelete = async () => {
    if (prescriptionId) {
      setLoadingDelete(true);
      try {
        await deletePrescription(prescriptionId).unwrap();
        toast.success('Prescription deleted successfully!');
        resetForm();
        setPrescriptionId(null);
      } catch (error) {
        toast.error('Failed to delete prescription');
      } finally {
        setLoadingDelete(false);
      }
    }
  };

  const handleLoadPrescription = () => {
    const id = Number(inputId);
    if (!isNaN(id)) {
      setLoadingLoad(true);
      setPrescriptionId(id);
      refetch(); // Force fresh data load
    } else {
      toast.error('Please enter a valid ID');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLoadPrescription();
    }
  };

  useEffect(() => {
    if (!isLoading) {
      setLoadingLoad(false);
    }
  }, [isLoading]);

  const resetForm = () => {
    setFormData({
      patient_name: '',
      medicine_name: '',
      dosage: '',
    });
    setInputId('');
  };

  if (error) {
    return <div className="text-center text-yellow-500">Prescription not found. Please check the ID and try again.</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Prescriptions</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          {prescriptionId ? 'Update Prescription' : 'Add Prescription'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <select
            value={formData.patient_name}
            onChange={(e) => setFormData({ ...formData, patient_name: e.target.value })}
            className="border p-2 rounded bg-gray-100"
          >
            <option value="" disabled>Select Patient</option>
            {isLoadingPatients ? (
              <option disabled>Loading patients...</option>
            ) : (
              patients?.map((patient: Patient) => (
                <option key={patient.id} value={patient.full_name}>
                  {patient.full_name}
                </option>
              ))
            )}
          </select>
          <select
            value={formData.medicine_name}
            onChange={(e) => setFormData({ ...formData, medicine_name: e.target.value })}
            className="border p-2 rounded bg-gray-100"
          >
            <option value="" disabled>Select Medicine</option>
            {isLoadingMedicines ? (
              <option disabled>Loading medicines...</option>
            ) : (
              medicines?.map((medicine: Medicine) => (
                <option key={medicine.id} value={medicine.name}>
                  {medicine.name}
                </option>
              ))
            )}
          </select>
          <input
            type="text"
            placeholder="Dosage"
            value={formData.dosage}
            onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
            className="border p-2 rounded bg-gray-100"
          />
        </div>
        <button
          onClick={prescriptionId ? handleUpdate : handleCreate}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          disabled={loadingCreate || loadingUpdate}
        >
          {loadingCreate ? 'Creating...' : loadingUpdate ? 'Updating...' : prescriptionId ? 'Update Prescription' : 'Add Prescription'}
        </button>
        {prescriptionId && (
          <button
            onClick={handleDelete}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition ml-2"
            disabled={loadingDelete}
          >
            {loadingDelete ? 'Deleting...' : 'Delete Prescription'}
          </button>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Load Prescription by ID</h2>
        <input
          type="number"
          placeholder="Enter Prescription ID"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          onKeyPress={handleKeyPress}
          className="border p-2 rounded bg-gray-100"
        />
        <button
          onClick={handleLoadPrescription}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          disabled={loadingLoad}
        >
          {loadingLoad ? 'Loading...' : 'Load Prescription'}
        </button>
      </div>
    </div>
  );
};

export default PrescriptionManagement;
