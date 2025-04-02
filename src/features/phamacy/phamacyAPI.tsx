import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PharmacyAPI = createApi({
  reducerPath: 'pharmacyAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hospital-api-1-pqd3.onrender.com/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMedicines: builder.query({
      query: () => 'pharmacy/',
    }),
    getMedicineById: builder.query({
      query: (id) => `pharmacy/${id}`,
    }),
    createMedicine: builder.mutation({
      query: (medicineData) => ({
        url: 'pharmacy/',
        method: 'POST',
        body: medicineData,
      }),
    }),
    updateMedicine: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `pharmacy/${id}`,
        method: 'PUT',
        body: updatedData,
      }),
    }),
    deleteMedicine: builder.mutation({
      query: (id) => ({
        url: `pharmacy/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const {
  useGetMedicinesQuery,
  useGetMedicineByIdQuery,
  useCreateMedicineMutation,
  useUpdateMedicineMutation,
  useDeleteMedicineMutation,
} = PharmacyAPI;

// Let me know if you want me to build the pharmacy component to use this API! 🚀