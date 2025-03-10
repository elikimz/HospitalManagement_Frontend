import React, { useEffect } from 'react';
import { useGetMyPaymentRecordsQuery } from '../features/reports/reportsAPI';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface PaymentRecord {
  id: number;
  amount: number;
  status: string;
  created_at: string;
}

const PatientsDashboard: React.FC = () => {
  const { data: paymentRecords, error, isLoading, refetch } = useGetMyPaymentRecordsQuery([]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 3000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, [refetch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading payment records</div>;

  // Prepare data for the chart
  const chartData = {
    labels: paymentRecords?.map((record: PaymentRecord) => new Date(record.created_at).toLocaleDateString()) || [],
    datasets: [
      {
        label: 'Payment Amount',
        data: paymentRecords?.map((record: PaymentRecord) => record.amount) || [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Patient Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Payment Records Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Payment Records</h2>
          <ul>
            {paymentRecords?.map((record: PaymentRecord) => (
              <li key={record.id} className="border-b pb-2 mb-2">
                <p><strong>Date:</strong> {new Date(record.created_at).toLocaleDateString()}</p>
                <p><strong>Amount:</strong> ${record.amount}</p>
                <p><strong>Status:</strong> {record.status}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Statistics Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Payment Statistics</h2>
          <div className="h-64">
            <Bar data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsDashboard;
