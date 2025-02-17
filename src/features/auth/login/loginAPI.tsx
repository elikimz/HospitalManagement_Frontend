// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export interface logInUser {
//     [x: string]: any;
//     email: string;
//     password: string;
// }

// export interface RequestPasswordReset {
//     email: string;
// }

// export const loginAPI = createApi({
//     reducerPath: 'loginAPI',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8002/' }),
//     endpoints: (builder) => ({
//         loginUser: builder.mutation<logInUser, Partial<logInUser>>({
//             query: (user) => ({
//                 url: 'auth/login',
//                 method: 'POST',
//                 body: user,
//             }),
//         }),
//         logout: builder.mutation<void, Partial<logInUser>>({
//             query: (user) => ({
//                 url: 'logout',
//                 method: 'POST',
//                 body: user,
//             }),
//         }),
//         getAllLoggedInUsers: builder.query<LoggedInUser[], void>({
//             query: () => 'login',
//         }),
//         requestPasswordReset: builder.mutation<void, RequestPasswordReset>({
//             query: (user) => ({
//                 url: 'auth/reset-password',
//                 method: 'POST',
//                 body: user,
//             }),
//         }),
//     }),
// });

// export const { 
//     useLoginUserMutation, 
//     useLogoutMutation, 
//     useGetAllLoggedInUsersQuery,
//     useRequestPasswordResetMutation 
// } = loginAPI;
