import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ReportsAPI = createApi({
  reducerPath: 'reportsAPI',
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
    getHospitalOverview: builder.query({
      query: () => 'overview',
    }),
    getFinancialSummary: builder.query({
      query: () => 'financial-summary',
    }),
    getDailyAppointments: builder.query({
      query: () => 'appointments/daily',
    }),
  }),
});

// Export hooks
// eslint-disable-next-line react-refresh/only-export-components
export const {
  useGetHospitalOverviewQuery,
  useGetFinancialSummaryQuery,
  useGetDailyAppointmentsQuery,
} = ReportsAPI;

// Let me know if you want me to build the report component next! 📊
