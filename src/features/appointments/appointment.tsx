import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useGetAppointmentsQuery,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation
} from '../appointments/appontmentAPI';
import { ClipLoader } from 'react-spinners';

interface Appointment {
  id: number;
  patient_id: number;
  doctor_id: number;
  date: string;
  duration: number;
  reason: string;
  appointment_type: string;
  status: string;
  notes: string | null;
  created_at: string;
}

const AppointmentAdmin = () => {
  const { data: appointments, error, refetch } = useGetAppointmentsQuery(undefined, {
    pollingInterval: 5000,
    refetchOnMountOrArgChange: true,
  });

  const [updateAppointment, { isLoading: isUpdating }] = useUpdateAppointmentMutation();
  const [deleteAppointment, { isLoading: isDeleting }] = useDeleteAppointmentMutation();

  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [localAppointments, setLocalAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);
  const [formData, setFormData] = useState({
    date: '',
    reason: '',
    notes: '',
  });
  const [filterCriteria, setFilterCriteria] = useState({
    patientId: '',
    doctorId: '',
  });

  useEffect(() => {
    if (appointments) {
      setLocalAppointments(appointments);
      setFilteredAppointments(appointments);
    }
  }, [appointments]);

  useEffect(() => {
    if (selectedAppointment) {
      setFormData({
        date: selectedAppointment.date.split('T')[0],
        reason: selectedAppointment.reason,
        notes: selectedAppointment.notes || '',
      });
    }
  }, [selectedAppointment]);

  useEffect(() => {
    const filtered = localAppointments.filter(appointment => {
      const matchesPatientId = filterCriteria.patientId ? appointment.patient_id === parseInt(filterCriteria.patientId) : true;
      const matchesDoctorId = filterCriteria.doctorId ? appointment.doctor_id === parseInt(filterCriteria.doctorId) : true;
      return matchesPatientId && matchesDoctorId;
    });
    setFilteredAppointments(filtered);
  }, [filterCriteria, localAppointments]);

  const handleUpdate = async () => {
    if (!selectedAppointment) return;
    try {
      await updateAppointment({ id: selectedAppointment.id, updatedData: formData }).unwrap();
      toast.success('Appointment updated successfully!');
      resetForm();
      refetch();
    } catch (error) {
      console.error('Update error:', error);
      toast.error('Failed to update appointment: ' + ((error as { data?: { detail?: string } })?.data?.detail || 'Unknown error'));
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteAppointment(id).unwrap();
      setLocalAppointments((prev) => prev.filter((appointment) => appointment.id !== id));
      toast.success('Appointment deleted successfully!');
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to delete appointment: ' + ((error as { data?: { detail?: string } })?.data?.detail || 'Unknown error'));
    }
  };

  const resetForm = () => {
    setFormData({ date: '', reason: '', notes: '' });
    setSelectedAppointment(null);
  };

  if (error) return <div className="text-center text-red-500">Error loading appointments: {((error as { data?: { detail?: string } })?.data?.detail || 'Unknown error')}</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Appointments</h1>

      {/* Filter Inputs */}
      <div className="mb-6 flex space-x-4">
        <input
          type="number"
          placeholder="Filter by Patient ID"
          value={filterCriteria.patientId}
          onChange={(e) => setFilterCriteria({ ...filterCriteria, patientId: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Filter by Doctor ID"
          value={filterCriteria.doctorId}
          onChange={(e) => setFilterCriteria({ ...filterCriteria, doctorId: e.target.value })}
          className="border p-2 rounded w-full"
        />
      </div>

      {selectedAppointment && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Edit Appointment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">Date</label>
              <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="border p-2 rounded bg-gray-100" />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">Reason</label>
              <input type="text" value={formData.reason} onChange={(e) => setFormData({ ...formData, reason: e.target.value })} className="border p-2 rounded bg-gray-100" />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">Notes</label>
              <textarea value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="border p-2 rounded bg-gray-100"></textarea>
            </div>
          </div>
          <button onClick={handleUpdate} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center justify-center">
            {isUpdating ? <ClipLoader color="#fff" size={15} /> : 'Update'}
          </button>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Appointments List</h2>
        <ul className="space-y-6">
          {filteredAppointments.map((appointment: Appointment) => (
            <li key={appointment.id} className="border p-6 rounded-lg shadow-sm bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col">
                <strong className="text-gray-600">Patient ID</strong>
                <p>{appointment.patient_id}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Doctor ID</strong>
                <p>{appointment.doctor_id}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Date</strong>
                <p>{new Date(appointment.date).toLocaleString()}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Duration</strong>
                <p>{appointment.duration} minutes</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Reason</strong>
                <p>{appointment.reason}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Type</strong>
                <p>{appointment.appointment_type}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Status</strong>
                <p>{appointment.status}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Notes</strong>
                <p>{appointment.notes || 'None'}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-600">Created At</strong>
                <p>{new Date(appointment.created_at).toLocaleString()}</p>
              </div>
              <div className="flex justify-end md:col-span-2 lg:col-span-4 space-x-3">
                <button
                  onClick={() => setSelectedAppointment(appointment)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(appointment.id)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                  disabled={isDeleting}
                >
                  {isDeleting ? <ClipLoader color="#fff" size={15} /> : 'Delete'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppointmentAdmin;
