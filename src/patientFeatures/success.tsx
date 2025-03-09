import { useParams } from 'react-router-dom';

const PaymentSuccess: React.FC = () => {
    const { patientId } = useParams();

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-100">
            <div className="p-6 md:p-10 bg-white rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold text-green-800 mb-4">Payment Successful!</h1>
                <p className="text-lg mb-2">Thank you for your payment, Patient ID: {patientId}</p>
                <p className="text-gray-600 mb-6">Your appointment is confirmed. You will receive a notification soon.</p>
                <button
                    onClick={() => window.location.href = 'https://hospital-management-frontend-gray.vercel.app/patient/payments'}
                    className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                >
                    Go to Payments
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccess;
