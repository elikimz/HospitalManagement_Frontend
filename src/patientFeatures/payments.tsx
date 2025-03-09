import  { useEffect } from 'react';
import { 
  useCreateCheckoutSessionMutation, 
 
  useGetPaymentStatusQuery 
} from '../patientFeatures/paymentsAPI';

const Payments = () => {
  const [createCheckoutSession, { data: checkoutData, isLoading: isCreating }] = useCreateCheckoutSessionMutation();
  const { data: paymentStatus, refetch: refetchPaymentStatus } = useGetPaymentStatusQuery(checkoutData?.id, { skip: !checkoutData });

  const handlePayment = async () => {
    try {
      const response = await createCheckoutSession([]).unwrap();
      window.location.href = response.checkout_url;
    } catch (error) {
      console.error('Failed to create checkout session:', error);
    }
  };

  useEffect(() => {
    if (checkoutData?.id) {
      const interval = setInterval(() => {
        refetchPaymentStatus();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [checkoutData, refetchPaymentStatus]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Payment Portal</h1>
      <button 
        onClick={handlePayment} 
        disabled={isCreating}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400">
        {isCreating ? 'Processing...' : 'Pay Now'}
      </button>

      {paymentStatus && (
        <div className="mt-4">
          <h2 className="text-xl">Payment Status:</h2>
          <p className="text-lg font-semibold">{paymentStatus.status}</p>
        </div>
      )}
    </div>
  );
};

export default Payments;
