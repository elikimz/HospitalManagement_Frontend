

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appointmentAPI = createApi({
  reducerPath: 'appointmentAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hospitalapi-aafufvbddvfpfzaq.southafricanorth-01.azurewebsites.net/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAppointments: builder.query({
      query: () => 'appointments/my-appointments',
    }),
    getAllAppointments: builder.query({
      query: () => 'appointments/', // Endpoint to fetch all appointments
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
  useGetAllAppointmentsQuery, // Hook for getting all appointments
  useCreateAppointmentMutation,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation,
} = appointmentAPI;
