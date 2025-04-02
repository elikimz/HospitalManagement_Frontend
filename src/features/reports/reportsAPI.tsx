


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ReportsAPI = createApi({
  reducerPath: 'reportsAPI',
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
    getHospitalOverview: builder.query({
      query: () => 'overview',
    }),
    getFinancialSummary: builder.query({
      query: () => 'financial-summary',
    }),
    getDailyAppointments: builder.query({
      query: () => 'appointments/daily',
    }),
    getMyPaymentRecords: builder.query({
      query: () => 'payments/my-records',
    }),
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const {
  useGetHospitalOverviewQuery,
  useGetFinancialSummaryQuery,
  useGetDailyAppointmentsQuery,
  useGetMyPaymentRecordsQuery,
} = ReportsAPI;
