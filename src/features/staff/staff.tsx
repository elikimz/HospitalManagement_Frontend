/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useGetStaffQuery,
  useCreateStaffMutation,
  useUpdateStaffMutation,
  useDeleteStaffMutation,
} from '../staff/staffAPI';

interface Staff {
  id: number;
  full_name: string;
  department: string;
  contact: string;
  created_at: string;
}

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }: { isOpen: boolean; onCancel: () => void; onConfirm: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-6">Are you sure you want to delete this staff member?</p>
        <div className="flex justify-end space-x-4">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const StaffManagement = () => {
  const { data: staff, error, refetch } = useGetStaffQuery({});
  const [createStaff] = useCreateStaffMutation();
  const [updateStaff] = useUpdateStaffMutation();
  const [deleteStaff] = useDeleteStaffMutation();

  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const [formData, setFormData] = useState({ full_name: '', department: '', contact: '' });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [staffToDelete, setStaffToDelete] = useState<number | null>(null);

  useEffect(() => {
    const polling = setInterval(() => {
      refetch();
    }, 5000);
    return () => clearInterval(polling);
  }, [refetch]);

  const handleCreate = async () => {
    try {
      await createStaff(formData).unwrap();
      toast.success('Staff created successfully!');
      resetForm();
      refetch();
    } catch (error) {
      toast.error('Failed to create staff');
    }
  };

  const handleUpdate = async () => {
    if (!selectedStaff) return;
    try {
      await updateStaff({ id: selectedStaff.id, updatedData: formData }).unwrap();
      toast.success('Staff updated successfully!');
      resetForm();
      refetch();
    } catch (error) {
      toast.error('Failed to update staff');
    }
  };

  const handleDelete = async () => {
    if (!staffToDelete) return;
    try {
      await deleteStaff(staffToDelete).unwrap();
      toast.success('Staff deleted successfully!');
      refetch();
    } catch (error) {
      toast.error('Failed to delete staff');
    } finally {
      setShowDeleteModal(false);
      setStaffToDelete(null);
    }
  };

  const resetForm = () => {
    setFormData({ full_name: '', department: '', contact: '' });
    setSelectedStaff(null);
  };

  useEffect(() => {
    if (selectedStaff) {
      setFormData({
        full_name: selectedStaff.full_name,
        department: selectedStaff.department,
        contact: selectedStaff.contact,
      });
    }
  }, [selectedStaff]);

  if (error) return <div className="text-center text-red-500">Error loading staff</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Staff</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          {selectedStaff ? 'Edit Staff' : 'Add Staff'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            className="border p-2 rounded bg-gray-100"
          />
          <input
            type="text"
            placeholder="Department"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className="border p-2 rounded bg-gray-100"
          />
          <input
            type="text"
            placeholder="Contact"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            className="border p-2 rounded bg-gray-100"
          />
        </div>
        <button
          onClick={selectedStaff ? handleUpdate : handleCreate}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          {selectedStaff ? 'Update Staff' : 'Add Staff'}
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Staff List</h2>
        <ul className="space-y-6">
          {staff?.map((member: Staff) => (
            <li
              key={member.id}
              className="border p-6 rounded-lg shadow-sm bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div>
                <strong className="text-gray-600">Name</strong>
                <p>{member.full_name}</p>
              </div>
              <div>
                <strong className="text-gray-600">Department</strong>
                <p>{member.department}</p>
              </div>
              <div>
                <strong className="text-gray-600">Contact</strong>
                <p>{member.contact}</p>
              </div>
              <div className="flex space-x-4">
                <button onClick={() => setSelectedStaff(member)} className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">Edit</button>
                <button onClick={() => { setStaffToDelete(member.id); setShowDeleteModal(true); }} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ConfirmationModal isOpen={showDeleteModal} onCancel={() => setShowDeleteModal(false)} onConfirm={handleDelete} />
    </div>
  );
};

export default StaffManagement;
