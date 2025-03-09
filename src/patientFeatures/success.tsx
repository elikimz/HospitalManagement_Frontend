// import { useParams } from 'react-router-dom';

// const PaymentSuccess: React.FC = () => {
//     const { patientId } = useParams();

//     return (
//         <div className="p-6 md:p-10 bg-green-100 rounded-lg shadow-lg">
//             <h1 className="text-3xl font-bold text-green-800 mb-4">Payment Successful!</h1>
//             <p>Thank you for your payment, Patient ID: {patientId}</p>
//             <p>Your appointment is confirmed. You will receive a notification soon.</p>
//         </div>
//     );
// };

// export default PaymentSuccess;


import { useParams, useNavigate } from 'react-router-dom';

const PaymentSuccess: React.FC = () => {
    const { patientId } = useParams();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/patient/payments');
    };

    return (
        <div className="p-6 md:p-10 bg-green-50 rounded-lg shadow-xl flex flex-col items-center">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Payment Successful!</h1>
            <p className="text-lg mb-2">Thank you for your payment, <span className="font-semibold">Patient ID: {patientId}</span></p>
            <p className="text-lg mb-6">Your appointment is confirmed. You will receive a notification soon.</p>
            <button
                onClick={handleGoBack}
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            >
                Go to Payments
            </button>
        </div>
    );
};

export default PaymentSuccess;
