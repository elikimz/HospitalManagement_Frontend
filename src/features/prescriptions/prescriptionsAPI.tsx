import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PrescriptionAPI = createApi({
  reducerPath: 'prescriptionAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hospitalapi-aafufvbddvfpfzaq.southafricanorth-01.azurewebsites.net/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      console.log('API Token:', token);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPrescriptions: builder.query({
      query: () => 'prescriptions/',
    }),
    getPrescriptionById: builder.query({
      query: (id) => `prescriptions/${id}`,
    }),
    createPrescription: builder.mutation({
      query: (prescriptionData) => ({
        url: 'prescriptions/',
        method: 'POST',
        body: prescriptionData,
      }),
    }),
    updatePrescription: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `prescriptions/${id}`,
        method: 'PUT',
        body: updatedData,
      }),
    }),
    deletePrescription: builder.mutation({
      query: (id) => ({
        url: `prescriptions/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const {
  useGetPrescriptionsQuery,
  useGetPrescriptionByIdQuery,
  useCreatePrescriptionMutation,
  useUpdatePrescriptionMutation,
  useDeletePrescriptionMutation,
} = PrescriptionAPI;

// Let me know if you want to build the component for managing prescriptions next! 🚀
