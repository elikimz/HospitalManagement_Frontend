import { useParams } from 'react-router-dom';

const PaymentFailed: React.FC = () => {
    const { patientId } = useParams();

    return (
        <div className="p-6 md:p-10 bg-red-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-red-800 mb-4">Payment Failed</h1>
            <p>Oops! The payment for Patient ID: {patientId} was unsuccessful.</p>
            <p>Please try again or contact support for help.</p>
        </div>
    );
};

export default PaymentFailed;
