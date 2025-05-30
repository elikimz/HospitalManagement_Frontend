// // import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // export const loginAPI = createApi({
// //   reducerPath: "loginAPI",
// //   baseQuery: fetchBaseQuery({ baseUrl: "https://hospitalapi-aafufvbddvfpfzaq.southafricanorth-01.azurewebsites.net/" }),
// //   endpoints: (builder) => ({
// //     loginUser: builder.mutation({
// //       query: (credentials) => ({
// //         url: "auth/login",
// //         method: "POST",
// //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
// //         body: credentials,
// //       }),
// //     }),
// //     requestPasswordReset: builder.mutation({
// //       query: (email) => ({
// //         url: "auth/request-password-reset",
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(email), // Expecting { email: "example@example.com" }
// //       }),
// //     }),
// //     verifyOtpResetPassword: builder.mutation({
// //       query: ({ email, otp, new_password }) => ({
// //         url: "auth/verify-otp-reset-password",
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email, otp, new_password }),
// //       }),
// //     }),
// //     changePassword: builder.mutation({
// //       query: ({ old_password, new_password, token }) => ({
// //         url: "auth/change-password",
// //         method: "POST",
// //         headers: { 
// //           "Content-Type": "application/json",
// //           "Authorization": `Bearer ${token}`,
// //         },
// //         body: JSON.stringify({ old_password, new_password }),
// //       }),
// //     }),
// //   }),
// // });

// // export const { 
// //   useLoginUserMutation, 
// //   useRequestPasswordResetMutation, 
// //   useVerifyOtpResetPasswordMutation, 
// //   useChangePasswordMutation 
// // } = loginAPI;


// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const loginAPI = createApi({
//   reducerPath: "loginAPI",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://hospitalapi-aafufvbddvfpfzaq.southafricanorth-01.azurewebsites.net/" }),
//   endpoints: (builder) => ({
//     loginUser: builder.mutation({
//       query: (credentials) => ({
//         url: "auth/login",
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: credentials,
//       }),
//     }),
//     requestPasswordReset: builder.mutation({
//       query: (email) => ({
//         url: "auth/request-password-reset",
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(email),
//       }),
//     }),
//     verifyOtpResetPassword: builder.mutation({
//       query: ({ email, otp, new_password }) => ({
//         url: "auth/verify-otp-reset-password",
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, otp, new_password }),
//       }),
//     }),
//     changePassword: builder.mutation({
//       query: ({ old_password, new_password, token }) => ({
//         url: "auth/change-password",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//         body: JSON.stringify({ old_password, new_password }),
//       }),
//     }),
//     getMe: builder.query({
//       query: (token) => ({
//         url: "auth/me",
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//       }),
//     }),
//   }),
// });

// export const {
//   useLoginUserMutation,
//   useRequestPasswordResetMutation,
//   useVerifyOtpResetPasswordMutation,
//   useChangePasswordMutation,
//   useGetMeQuery,
// } = loginAPI;


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginAPI = createApi({
  reducerPath: "loginAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hospital-api-1-pqd3.onrender.com/",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: credentials,
      }),
    }),
    requestPasswordReset: builder.mutation({
      query: (email) => ({
        url: "auth/request-password-reset",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(email),
      }),
    }),
    verifyOtpResetPassword: builder.mutation({
      query: ({ email, otp, new_password }) => ({
        url: "auth/verify-otp-reset-password",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, new_password }),
      }),
    }),
    changePassword: builder.mutation({
      query: ({ old_password, new_password, token }) => ({
        url: "auth/change-password",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ old_password, new_password }),
      }),
    }),
    getMe: builder.query({
      query: (token) => ({
        url: "auth/me",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getPatientInfo: builder.query({
      query: (token) => ({
        url: "auth/patient/me",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updatePatientInfo: builder.mutation({
      query: ({ token, ...patientUpdate }) => ({
        url: "auth/patient/me",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(patientUpdate),
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRequestPasswordResetMutation,
  useVerifyOtpResetPasswordMutation,
  useChangePasswordMutation,
  useGetMeQuery,
  useGetPatientInfoQuery,
  useUpdatePatientInfoMutation,
} = loginAPI;
