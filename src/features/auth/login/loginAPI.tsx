import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginAPI = createApi({
  reducerPath: "loginAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8002/" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: credentials,
      }),
    }),
    requestPasswordReset: builder.mutation({
      query: (email) => ({
        url: "/auth/request-password-reset",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(email), // ✅ Ensure JSON structure
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRequestPasswordResetMutation } = loginAPI;
