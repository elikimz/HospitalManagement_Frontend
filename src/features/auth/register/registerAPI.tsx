import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const registerAPI = createApi({
  reducerPath: 'registerAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hospital-api-1-pqd3.onrender.com/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: 'auth/register',
        method: 'POST',
        body: newUser,
      }),
    }),
    getUsers: builder.query({
      query: () => '/user', // Define the endpoint for fetching users
    }),
  }),
});

export const { useRegisterUserMutation, useGetUsersQuery } = registerAPI;
