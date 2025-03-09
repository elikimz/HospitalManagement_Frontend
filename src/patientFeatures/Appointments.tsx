

// import React, { useState } from 'react';
// import {
//     useGetAppointmentsQuery,
//     useCreateAppointmentMutation,
//     useUpdateAppointmentMutation,
//     useDeleteAppointmentMutation
// } from "../features/appointments/appontmentAPI";

// interface Appointment {
//     id: number;
//     date: string;
//     duration: number;
//     reason: string;
//     doctor_id: string;
//     appointment_type: string;
//     notes: string;
// }

// const Appointments: React.FC = () => {
//     const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null);
//     const { data: appointments = [], refetch, isLoading } = useGetAppointmentsQuery([]);
//     const [createAppointment, { isLoading: isCreating }] = useCreateAppointmentMutation();
//     const [updateAppointment, { isLoading: isUpdating }] = useUpdateAppointmentMutation();
//     const [deleteAppointment, { isLoading: isDeleting }] = useDeleteAppointmentMutation();
//     const [message, setMessage] = useState<string | null>(null);

//     const handleCreateAppointment = async (appointment: Omit<Appointment, 'id'>) => {
//         try {
//             await createAppointment(appointment).unwrap();
//             setMessage("Appointment created successfully!");
//             refetch(); // Refetch appointments to update the list
//         } catch (error) {
//             setMessage("Failed to create appointment.");
//             console.error('Failed to create appointment:', error);
//         }
//     };

//     const handleUpdateAppointment = async (updatedAppointment: Partial<Appointment>) => {
//         try {
//             await updateAppointment({ id: editingAppointment!.id, updatedData: updatedAppointment }).unwrap();
//             setMessage("Appointment updated successfully!");
//             refetch(); // Refetch appointments to update the list
//             setEditingAppointment(null);
//         } catch (error) {
//             setMessage("Failed to update appointment.");
//             console.error('Failed to update appointment:', error);
//         }
//     };

//     const handleDeleteAppointment = async (id: number) => {
//         try {
//             await deleteAppointment(id).unwrap();
//             setMessage("Appointment deleted successfully!");
//             refetch(); // Refetch appointments to update the list
//         } catch (error) {
//             setMessage("Failed to delete appointment.");
//             console.error('Failed to delete appointment:', error);
//         }
//     };

//     return (
//         <div className="p-6 md:p-10 bg-white rounded-lg shadow-lg">
//             <h1 className="text-3xl font-bold text-teal-800 mb-6">Appointments</h1>
//             {message && <p className="text-green-500 mb-4">{message}</p>}
//             {isLoading && <p>Loading appointments...</p>}
//             <div className="space-y-6">
//                 <AppointmentForm onSave={handleCreateAppointment} isLoading={isCreating} />
//                 <div className="mt-8">
//                     <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Appointments</h2>
//                     {appointments.map(appointment => (
//                         <div key={appointment.id} className="border p-4 rounded-lg mb-4">
//                             {editingAppointment?.id === appointment.id ? (
//                                 <AppointmentForm
//                                     appointment={appointment}
//                                     onSave={handleUpdateAppointment}
//                                     onCancel={() => setEditingAppointment(null)}
//                                     isLoading={isUpdating}
//                                 />
//                             ) : (
//                                 <AppointmentDisplay
//                                     appointment={appointment}
//                                     onEdit={() => setEditingAppointment(appointment)}
//                                     onDelete={() => handleDeleteAppointment(appointment.id)}
//                                     isLoading={isDeleting}
//                                 />
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// interface AppointmentFormProps {
//     appointment?: Appointment;
//     onSave: (appointment: Partial<Appointment>) => void;
//     onCancel?: () => void;
//     isLoading: boolean;
// }

// const AppointmentForm: React.FC<AppointmentFormProps> = ({ appointment, onSave, onCancel, isLoading }) => {
//     const [date, setDate] = useState(appointment?.date || '');
//     const [duration, setDuration] = useState(appointment?.duration ? appointment.duration.toString() : '');
//     const [reason, setReason] = useState(appointment?.reason || '');
//     const [doctorId, setDoctorId] = useState(appointment?.doctor_id || '');
//     const [appointmentType, setAppointmentType] = useState(appointment?.appointment_type || 'physical');
//     const [notes, setNotes] = useState(appointment?.notes || '');

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         onSave({ date, duration: parseInt(duration), reason, doctor_id: doctorId, appointment_type: appointmentType, notes });
//         setDate('');
//         setDuration('');
//         setReason('');
//         setDoctorId('');
//         setAppointmentType('physical');
//         setNotes('');
//     };

//     return (
//         <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="mb-2">
//                 <label className="block text-gray-700">Date and Time</label>
//                 <input
//                     type="datetime-local"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                     className="w-full p-2 border rounded"
//                     required
//                 />
//             </div>
//             <div className="mb-2">
//                 <label className="block text-gray-700">Duration (minutes)</label>
//                 <input
//                     type="number"
//                     value={duration}
//                     onChange={(e) => setDuration(e.target.value)}
//                     className="w-full p-2 border rounded"
//                     required
//                 />
//             </div>
//             <div className="mb-2">
//                 <label className="block text-gray-700">Reason</label>
//                 <input
//                     type="text"
//                     value={reason}
//                     onChange={(e) => setReason(e.target.value)}
//                     className="w-full p-2 border rounded"
//                     required
//                 />
//             </div>
//             <div className="mb-2">
//                 <label className="block text-gray-700">Doctor ID</label>
//                 <input
//                     type="text"
//                     value={doctorId}
//                     onChange={(e) => setDoctorId(e.target.value)}
//                     className="w-full p-2 border rounded"
//                     required
//                 />
//             </div>
//             <div className="mb-2">
//                 <label className="block text-gray-700">Appointment Type</label>
//                 <select
//                     value={appointmentType}
//                     onChange={(e) => setAppointmentType(e.target.value)}
//                     className="w-full p-2 border rounded"
//                     required
//                 >
//                     <option value="physical">Physical</option>
//                     <option value="virtual">Virtual</option>
//                 </select>
//             </div>
//             <div className="mb-2">
//                 <label className="block text-gray-700">Notes</label>
//                 <textarea
//                     value={notes}
//                     onChange={(e) => setNotes(e.target.value)}
//                     className="w-full p-2 border rounded"
//                 />
//             </div>
//             <div className="flex justify-end space-x-2">
//                 {onCancel && <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>}
//                 <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded" disabled={isLoading}>
//                     {isLoading ? 'Saving...' : 'Save'}
//                 </button>
//             </div>
//         </form>
//     );
// };

// interface AppointmentDisplayProps {
//     appointment: Appointment;
//     onEdit: () => void;
//     onDelete: () => void;
//     isLoading: boolean;
// }

// const AppointmentDisplay: React.FC<AppointmentDisplayProps> = ({ appointment, onEdit, onDelete, isLoading }) => {
//     return (
//         <div className="flex justify-between items-center">
//             <div>
//                 <div className="mb-1">
//                     <strong>Date and Time:</strong> {new Date(appointment.date).toLocaleString()}
//                 </div>
//                 <div className="mb-1">
//                     <strong>Duration:</strong> {appointment.duration} mins
//                 </div>
//                 <div className="mb-1">
//                     <strong>Reason:</strong> {appointment.reason}
//                 </div>
//                 <div className="mb-1">
//                     <strong>Doctor ID:</strong> {appointment.doctor_id}
//                 </div>
//                 <div className="mb-1">
//                     <strong>Type:</strong> {appointment.appointment_type}
//                 </div>
//                 <div className="mb-1">
//                     <strong>Notes:</strong> {appointment.notes}
//                 </div>
//             </div>
//             <div className="flex space-x-2">
//                 <button onClick={onEdit} className="text-blue-500" disabled={isLoading}>
//                     {isLoading ? 'Editing...' : 'Edit'}
//                 </button>
//                 <button onClick={onDelete} className="text-red-500" disabled={isLoading}>
//                     {isLoading ? 'Deleting...' : 'Delete'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Appointments;

import React, { useState } from 'react';
import {
    useGetAppointmentsQuery,
    useCreateAppointmentMutation,
    useUpdateAppointmentMutation,
    useDeleteAppointmentMutation
} from "../features/appointments/appontmentAPI";

interface Appointment {
    id: number;
    date: string;
    duration: number;
    reason: string;
    doctor_id: string;
    appointment_type: string;
    notes: string;
}

const Appointments: React.FC = () => {
    const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null);
    const { data: appointments = [], refetch, isLoading } = useGetAppointmentsQuery([]);
    const [createAppointment, { isLoading: isCreating }] = useCreateAppointmentMutation();
    const [updateAppointment, { isLoading: isUpdating }] = useUpdateAppointmentMutation();
    const [deleteAppointment, { isLoading: isDeleting }] = useDeleteAppointmentMutation();
    const [message, setMessage] = useState<string | null>(null);

    const handleCreateAppointment = async (appointment: Omit<Appointment, 'id'>) => {
        try {
            await createAppointment(appointment).unwrap();
            setMessage("Appointment created successfully!");
            refetch(); // Refetch appointments to update the list
        } catch (error) {
            setMessage("Failed to create appointment.");
            console.error('Failed to create appointment:', error);
        }
    };

    const handleUpdateAppointment = async (updatedAppointment: Partial<Appointment>) => {
        if (!editingAppointment) return;

        try {
            await updateAppointment({ id: editingAppointment.id, updatedData: updatedAppointment }).unwrap();
            setMessage("Appointment updated successfully!");
            refetch(); // Refetch appointments to update the list
            setEditingAppointment(null);
        } catch (error) {
            setMessage("Failed to update appointment.");
            console.error('Failed to update appointment:', error);
        }
    };

    const handleDeleteAppointment = async (id: number) => {
        try {
            await deleteAppointment(id).unwrap();
            setMessage("Appointment deleted successfully!");
            refetch(); // Refetch appointments to update the list
        } catch (error) {
            setMessage("Failed to delete appointment.");
            console.error('Failed to delete appointment:', error);
        }
    };

    return (
        <div className="p-6 md:p-10 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-teal-800 mb-6">Appointments</h1>
            {message && <p className="text-green-500 mb-4">{message}</p>}
            {isLoading && <p>Loading appointments...</p>}
            <div className="space-y-6">
                <AppointmentForm onSave={handleCreateAppointment} isLoading={isCreating} />
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Appointments</h2>
                    {appointments.map((appointment: Appointment) => ( // Explicitly type the parameter
                        <div key={appointment.id} className="border p-4 rounded-lg mb-4">
                            {editingAppointment?.id === appointment.id ? (
                                <AppointmentForm
                                    appointment={appointment}
                                    onSave={handleUpdateAppointment}
                                    onCancel={() => setEditingAppointment(null)}
                                    isLoading={isUpdating}
                                />
                            ) : (
                                <AppointmentDisplay
                                    appointment={appointment}
                                    onEdit={() => setEditingAppointment(appointment)}
                                    onDelete={() => handleDeleteAppointment(appointment.id)}
                                    isLoading={isDeleting}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

interface AppointmentFormProps {
    appointment?: Appointment;
    onSave: (appointment: Omit<Appointment, 'id'>) => void;
    onCancel?: () => void;
    isLoading: boolean;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ appointment, onSave, onCancel, isLoading }) => {
    const [date, setDate] = useState(appointment?.date || '');
    const [duration, setDuration] = useState(appointment?.duration ? appointment.duration.toString() : '');
    const [reason, setReason] = useState(appointment?.reason || '');
    const [doctorId, setDoctorId] = useState(appointment?.doctor_id || '');
    const [appointmentType, setAppointmentType] = useState(appointment?.appointment_type || 'physical');
    const [notes, setNotes] = useState(appointment?.notes || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const appointmentData: Omit<Appointment, 'id'> = {
            date,
            duration: parseInt(duration),
            reason,
            doctor_id: doctorId,
            appointment_type: appointmentType,
            notes
        };
        onSave(appointmentData);
        setDate('');
        setDuration('');
        setReason('');
        setDoctorId('');
        setAppointmentType('physical');
        setNotes('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-2">
                <label className="block text-gray-700">Date and Time</label>
                <input
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Duration (minutes)</label>
                <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Reason</label>
                <input
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Doctor ID</label>
                <input
                    type="text"
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Appointment Type</label>
                <select
                    value={appointmentType}
                    onChange={(e) => setAppointmentType(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                >
                    <option value="physical">Physical</option>
                    <option value="virtual">Virtual</option>
                </select>
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Notes</label>
                <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="flex justify-end space-x-2">
                {onCancel && <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>}
                <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded" disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Save'}
                </button>
            </div>
        </form>
    );
};

interface AppointmentDisplayProps {
    appointment: Appointment;
    onEdit: () => void;
    onDelete: () => void;
    isLoading: boolean;
}

const AppointmentDisplay: React.FC<AppointmentDisplayProps> = ({ appointment, onEdit, onDelete, isLoading }) => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <div className="mb-1">
                    <strong>Date and Time:</strong> {new Date(appointment.date).toLocaleString()}
                </div>
                <div className="mb-1">
                    <strong>Duration:</strong> {appointment.duration} mins
                </div>
                <div className="mb-1">
                    <strong>Reason:</strong> {appointment.reason}
                </div>
                <div className="mb-1">
                    <strong>Doctor ID:</strong> {appointment.doctor_id}
                </div>
                <div className="mb-1">
                    <strong>Type:</strong> {appointment.appointment_type}
                </div>
                <div className="mb-1">
                    <strong>Notes:</strong> {appointment.notes}
                </div>
            </div>
            <div className="flex space-x-2">
                <button onClick={onEdit} className="text-blue-500" disabled={isLoading}>
                    {isLoading ? 'Editing...' : 'Edit'}
                </button>
                <button onClick={onDelete} className="text-red-500" disabled={isLoading}>
                    {isLoading ? 'Deleting...' : 'Delete'}
                </button>
            </div>
        </div>
    );
};

export default Appointments;
