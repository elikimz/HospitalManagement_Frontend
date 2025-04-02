import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PaymentAPI = createApi({
  reducerPath: 'paymentAPI',
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
    createCheckoutSession: builder.mutation({
      query: () => ({
        url: 'payments/payments/create-checkout-session/',
        method: 'POST',
      }),
    }),
    handleStripeWebhook: builder.mutation({
      query: (payload) => ({
        url: 'webhook/',
        method: 'POST',
        body: payload,
      }),
    }),
    getPaymentStatus: builder.query({
      query: (paymentId) => `payments/status/${paymentId}`,
    }),
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const {
  useCreateCheckoutSessionMutation,
  useHandleStripeWebhookMutation,
  useGetPaymentStatusQuery,
} = PaymentAPI;

export default PaymentAPI;
