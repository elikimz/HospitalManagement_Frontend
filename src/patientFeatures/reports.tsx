// import React, { useEffect } from 'react';
// import { useGetMyPaymentRecordsQuery } from '../features/reports/reportsAPI';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// interface PaymentRecord {
//   id: number;
//   amount: number;
//   status: string;
//   created_at: string;
// }

// const PatientsDashboard: React.FC = () => {
//   const { data: paymentRecords, error, isLoading, refetch } = useGetMyPaymentRecordsQuery([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       refetch();
//     }, 3000); // Refresh every 30 seconds

//     return () => clearInterval(interval);
//   }, [refetch]);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading payment records</div>;

//   // Prepare data for the chart
//   const chartData = {
//     labels: paymentRecords?.map((record: PaymentRecord) => new Date(record.created_at).toLocaleDateString()) || [],
//     datasets: [
//       {
//         label: 'Payment Amount',
//         data: paymentRecords?.map((record: PaymentRecord) => record.amount) || [],
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-6 text-gray-800">Patient Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Payment Records Section */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-600">Payment Records</h2>
//           <ul>
//             {paymentRecords?.map((record: PaymentRecord) => (
//               <li key={record.id} className="border-b pb-2 mb-2">
//                 <p><strong>Date:</strong> {new Date(record.created_at).toLocaleDateString()}</p>
//                 <p><strong>Amount:</strong> ${record.amount}</p>
//                 <p><strong>Status:</strong> {record.status}</p>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Payment Statistics Section */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4 text-red-600">Payment Statistics</h2>
//           <div className="h-64">
//             <Bar data={chartData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientsDashboard;



import React, { useEffect } from 'react';
import { useGetMyPaymentRecordsQuery } from '../features/reports/reportsAPI';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

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

  // Prepare data for the charts
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

  // Payment Status Distribution
  const statusData = {
    labels: ['Pending', 'Success', 'Failed'],
    datasets: [
      {
        label: 'Payment Status',
        data: [
          paymentRecords?.filter((record: PaymentRecord) => record.status === 'PENDING').length || 0,
          paymentRecords?.filter((record: PaymentRecord) => record.status === 'SUCCESS').length || 0,
          paymentRecords?.filter((record: PaymentRecord) => record.status === 'FAILED').length || 0,
        ],
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384'], // Adjusted colors
      },
    ],
  };

  // Monthly Payment Trends
  const monthlyData = {
    labels: [...new Set(paymentRecords?.map((record: PaymentRecord) => new Date(record.created_at).toLocaleString('default', { month: 'long' })))],
    datasets: [
      {
        label: 'Monthly Payments',
        data: Array.from({ length: 12 }, (_, i) => {
          const month = new Date(2023, i, 1).toLocaleString('default', { month: 'long' });
          return paymentRecords?.filter((record: PaymentRecord) => new Date(record.created_at).toLocaleString('default', { month: 'long' }) === month)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .reduce((sum: any, record: { amount: any; }) => sum + record.amount, 0) || 0;
        }),
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
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

        {/* Payment Status Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Payment Status Distribution</h2>
          <div className="h-64">
            <Pie data={statusData} />
          </div>
        </div>

        {/* Monthly Payment Trends */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Monthly Payment Trends</h2>
          <div className="h-64">
            <Line data={monthlyData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsDashboard;
