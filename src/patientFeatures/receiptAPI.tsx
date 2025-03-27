import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Optionally, define a TypeScript interface for your receipt data
export interface Receipt {
  hospitalName: string;
  hospitalAddress: string;
  hospitalContact: string;
  patientName: string;
  patientId: number;
  paymentId: number;
  paymentDate: string;
  paymentMethod: string;
  amount: number;
  notes: string;
}

export const ReceiptAPI = createApi({
  reducerPath: 'receiptAPI',
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
    getReceipt: builder.query<Receipt, number>({
      query: (paymentId: number) => `receipt/${paymentId}`,
    }),
  }),
});


// eslint-disable-next-line react-refresh/only-export-components
export const { useGetReceiptQuery } = ReceiptAPI;

export default ReceiptAPI;
