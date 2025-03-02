import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appointmentAPI = createApi({
  reducerPath: 'appointmentAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hospital-api-ux1e.onrender.com/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token'); // Get token from localStorage
      console.log('API Response:', token); 

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAppointments: builder.query({
      query: () => 'appointments/',
    }),
    createAppointment: builder.mutation({
      query: (appointmentData) => ({
        url: 'appointments/',
        method: 'POST',
        body: appointmentData,
      }),
    }),
    updateAppointment: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `appointments/${id}`,
        method: 'PUT',
        body: updatedData,
      }),
    }),
    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: `appointments/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAppointmentsQuery,
  useCreateAppointmentMutation,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation,
} = appointmentAPI;
