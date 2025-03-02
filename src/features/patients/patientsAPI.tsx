



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PatientsAPI = createApi({
  reducerPath: 'patientsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hospital-api-ux1e.onrender.com/',
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
    getPatients: builder.query({
      query: () => 'patients/',
    }),
    createPatients: builder.mutation({
      query: (patientData) => ({
        url: 'patients/',
        method: 'POST',
        body: patientData,
      }),
    }),
    updatePatient: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `patients/${id}`,
        method: 'PUT',
        body: updatedData,
      }),
    }),
    deletePatient: builder.mutation({
      query: (id) => ({
        url: `patients/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const {
  useGetPatientsQuery,
  useCreatePatientsMutation,
  useUpdatePatientMutation,
  useDeletePatientMutation,
} = PatientsAPI;