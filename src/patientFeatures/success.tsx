import { useParams } from 'react-router-dom';

const PaymentSuccess: React.FC = () => {
    const { patientId } = useParams();

    return (
        <div className="p-6 md:p-10 bg-green-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-green-800 mb-4">Payment Successful!</h1>
            <p>Thank you for your payment, Patient ID: {patientId}</p>
            <p>Your appointment is confirmed. You will receive a notification soon.</p>
        </div>
    );
};

export default PaymentSuccess;
