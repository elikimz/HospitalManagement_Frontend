// import React, { useState } from 'react';
// import {
//   useGetMedicinesQuery,
//   useCreateMedicineMutation,
//   useUpdateMedicineMutation,
//   useDeleteMedicineMutation,
// } from '../phamacy/phamacyAPI';

// // Define a type for the medicine data
// interface Medicine {
//   id: string;
//   name: string;
//   stock: number;
//   price: number;
//   description: string;
// }

// const Pharmacy: React.FC = () => {
//   const { data: medicines = [], error, isLoading, refetch } = useGetMedicinesQuery({});
//   const [createMedicine, { isLoading: isCreating }] = useCreateMedicineMutation();
//   const [updateMedicine, { isLoading: isUpdating }] = useUpdateMedicineMutation();
//   const [deleteMedicine, { isLoading: isDeleting }] = useDeleteMedicineMutation();

//   const [formData, setFormData] = useState<Medicine>({
//     id: '',
//     name: '',
//     stock: 0,
//     price: 0,
//     description: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: name === 'stock' || name === 'price' ? Number(value) : value,
//     }));
//   };

//   const handleCreate = async () => {
//     try {
//       await createMedicine(formData).unwrap();
//       setFormData({ id: '', name: '', stock: 0, price: 0, description: '' });
//       refetch();
//     } catch (err) {
//       console.error('Failed to create medicine:', err);
//     }
//   };

//   const handleUpdate = async () => {
//     try {
//       await updateMedicine({
//         id: formData.id,
//         updatedData: {
//           ...formData,
//           description: formData.description || ''
//         }
//       }).unwrap();
//       setFormData({ id: '', name: '', stock: 0, price: 0, description: '' });
//       refetch();
//     } catch (err) {
//       console.error('Failed to update medicine:', err);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       await deleteMedicine(id).unwrap();
//       refetch();
//     } catch (err) {
//       console.error('Failed to delete medicine:', err);
//     }
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading medicines</div>;

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">Pharmacy Management</h1>

//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h2 className="text-2xl font-semibold mb-4 text-gray-700">
//           {formData.id ? 'Update Medicine' : 'Add Medicine'}
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-gray-600">Medicine Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Medicine Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="border p-2 rounded bg-gray-100 w-full"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600">Stock</label>
//             <input
//               type="number"
//               name="stock"
//               placeholder="Stock"
//               value={formData.stock}
//               onChange={handleChange}
//               className="border p-2 rounded bg-gray-100 w-full"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600">Price</label>
//             <input
//               type="number"
//               name="price"
//               placeholder="Price"
//               value={formData.price}
//               onChange={handleChange}
//               className="border p-2 rounded bg-gray-100 w-full"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600">Description</label>
//             <input
//               type="text"
//               name="description"
//               placeholder="Description"
//               value={formData.description}
//               onChange={handleChange}
//               className="border p-2 rounded bg-gray-100 w-full"
//             />
//           </div>
//         </div>
//         <button
//           onClick={formData.id ? handleUpdate : handleCreate}
//           disabled={isCreating || isUpdating}
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center justify-center"
//         >
//           {(isCreating || isUpdating) ? (
//             <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           ) : (
//             formData.id ? 'Update Medicine' : 'Add Medicine'
//           )}
//         </button>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4 text-gray-700">Medicines List</h2>
//         <ul>
//           {medicines.map((medicine: Medicine) => (
//             <li
//               key={medicine.id}
//               className="p-4 bg-gray-100 rounded-lg mb-4 flex justify-between items-center"
//             >
//               <div>
//                 <p className="text-lg font-semibold">{medicine.name}</p>
//                 <p className="text-gray-600">{medicine.description}</p>
//                 <div className="flex space-x-4 mt-2">
//                   <p className="text-green-600">Stock: {medicine.stock}</p>
//                   <p className="text-green-600">Price: ${medicine.price}</p>
//                 </div>
//               </div>
//               <div>
//                 <button
//                   onClick={() => setFormData(medicine)}
//                   className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(medicine.id)}
//                   disabled={isDeleting}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition flex items-center justify-center"
//                 >
//                   {isDeleting ? (
//                     <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full" role="status">
//                       <span className="visually-hidden">Loading...</span>
//                     </div>
//                   ) : (
//                     'Delete'
//                   )}
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Pharmacy;



import React, { useState } from 'react';
import {
  useGetMedicinesQuery,
  useCreateMedicineMutation,
  useUpdateMedicineMutation,
  useDeleteMedicineMutation,
} from '../phamacy/phamacyAPI';

// Define a type for the medicine data
interface Medicine {
  id: string;
  name: string;
  stock: number;
  price: number;
  description: string;
}

const Pharmacy: React.FC = () => {
  const { data: medicines = [], error, isLoading, refetch } = useGetMedicinesQuery({});
  const [createMedicine, { isLoading: isCreating }] = useCreateMedicineMutation();
  const [updateMedicine, { isLoading: isUpdating }] = useUpdateMedicineMutation();
  const [deleteMedicine, { isLoading: isDeleting }] = useDeleteMedicineMutation();

  const [formData, setFormData] = useState<Medicine>({
    id: '',
    name: '',
    stock: 0,
    price: 0,
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'stock' || name === 'price' ? Number(value) : value,
    }));
  };

  const handleCreate = async () => {
    try {
      await createMedicine(formData).unwrap();
      setFormData({ id: '', name: '', stock: 0, price: 0, description: '' });
      refetch();
    } catch (err) {
      console.error('Failed to create medicine:', err);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateMedicine({
        id: formData.id,
        updatedData: {
          ...formData,
          description: formData.description || ''
        }
      }).unwrap();
      setFormData({ id: '', name: '', stock: 0, price: 0, description: '' });
      refetch();
    } catch (err) {
      console.error('Failed to update medicine:', err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteMedicine(id).unwrap();
      refetch();
    } catch (err) {
      console.error('Failed to delete medicine:', err);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading medicines</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Pharmacy Management</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          {formData.id ? 'Update Medicine' : 'Add Medicine'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600">Medicine Name</label>
            <input
              type="text"
              name="name"
              placeholder="Medicine Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded bg-gray-100 w-full"
            />
          </div>
          <div>
            <label className="block text-gray-600">Stock</label>
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleChange}
              className="border p-2 rounded bg-gray-100 w-full"
            />
          </div>
          <div>
            <label className="block text-gray-600">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="border p-2 rounded bg-gray-100 w-full"
            />
          </div>
          <div>
            <label className="block text-gray-600">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="border p-2 rounded bg-gray-100 w-full"
            />
          </div>
        </div>
        <button
          onClick={formData.id ? handleUpdate : handleCreate}
          disabled={isCreating || isUpdating}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center justify-center"
        >
          {(isCreating || isUpdating) ? (
            <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            formData.id ? 'Update Medicine' : 'Add Medicine'
          )}
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Medicines List</h2>
        <ul>
          {medicines.map((medicine: Medicine) => (
            <li
              key={medicine.id}
              className="p-4 bg-gray-100 rounded-lg mb-4 flex justify-between items-center"
            >
              <div className="flex-grow">
                <p className="text-lg font-semibold">{medicine.name}</p>
                <p className="text-gray-600">{medicine.description}</p>
                <div className="flex space-x-4 mt-2">
                  <p className="text-green-600">Stock: {medicine.stock}</p>
                  <p className="text-green-600">Price: ${medicine.price}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setFormData(medicine)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(medicine.id)}
                  disabled={isDeleting}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition flex items-center justify-center"
                >
                  {isDeleting ? (
                    <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    'Delete'
                  )}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pharmacy;
