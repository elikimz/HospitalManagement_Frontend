import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const StaffAPI = createApi({
  reducerPath: 'staffAPI',
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
    getStaff: builder.query({
      query: () => 'staff/',
    }),
    getStaffById: builder.query({
      query: (id) => `staff/${id}`,
    }),
    createStaff: builder.mutation({
      query: (staffData) => ({
        url: 'staff/',
        method: 'POST',
        body: staffData,
      }),
    }),
    updateStaff: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `staff/${id}`,
        method: 'PUT',
        body: updatedData,
      }),
    }),
    deleteStaff: builder.mutation({
      query: (id) => ({
        url: `staff/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const {
  useGetStaffQuery,
  useGetStaffByIdQuery,
  useCreateStaffMutation,
  useUpdateStaffMutation,
  useDeleteStaffMutation,
} = StaffAPI;

// You can now call useGetStaffByIdQuery in your component to fetch staff by ID!
// Let me know if you want me to update the component to show staff details by ID. 🚀
