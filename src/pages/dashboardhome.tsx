

// import React, { useEffect } from 'react';
// import { useGetHospitalOverviewQuery, useGetFinancialSummaryQuery } from '../features/reports/reportsAPI';
// import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts';

// const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#ff6384'];

// const DashboardHome: React.FC = () => {
//   const { data: overview, error: overviewError, isLoading: overviewLoading, refetch: refetchOverview } = useGetHospitalOverviewQuery({});
//   const { data: financial, error: financialError, isLoading: financialLoading, refetch: refetchFinancial } = useGetFinancialSummaryQuery({});

//   useEffect(() => {
//     const interval = setInterval(() => {
//       refetchOverview();
//       refetchFinancial();
//     }, 30000);

//     return () => clearInterval(interval);
//   }, [refetchOverview, refetchFinancial]);

//   if (overviewLoading || financialLoading) return <div>Loading...</div>;

//   const getErrorMessage = (error: unknown) => {
//     if (error && typeof error === 'object' && 'data' in error && typeof error.data === 'string') {
//       return error.data;
//     }
//     return 'An unexpected error occurred';
//   };

//   if (overviewError || financialError) {
//     console.error('Overview Error:', overviewError);
//     console.error('Financial Error:', financialError);

//     return (
//       <div className="text-red-600 p-4 bg-red-100 rounded-lg">
//         <h2 className="text-xl font-bold mb-2">Error loading reports</h2>
//         {overviewError && <p>Overview Error: {getErrorMessage(overviewError)}</p>}
//         {financialError && <p>Financial Error: {getErrorMessage(financialError)}</p>}
//       </div>
//     );
//   }

//   const overviewData = overview ? [
//     { name: 'Patients', value: overview.total_patients || 0 },
//     { name: 'Doctors', value: overview.total_doctors || 0 },
//     { name: 'Staff', value: overview.total_staff || 0 },
//     { name: 'Appointments', value: overview.total_appointments || 0 },
//     { name: 'Medicines', value: overview.total_medicines || 0 }
//   ] : [];

//   const financialData = financial ? [
//     { name: 'Total Earnings', amount: financial.total_earnings || 0 },
//     { name: 'Total Paid', amount: financial.total_paid || 0 },
//     { name: 'Total Pending', amount: financial.total_pending || 0 }
//   ] : [];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-6 text-gray-800">Hospital Analytics Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-600">Hospital Overview</h2>
//           {overviewData.length > 0 ? (
//             <PieChart width={400} height={300}>
//               <Pie data={overviewData} cx={200} cy={150} outerRadius={100} fill="#8884d8" dataKey="value" label>
//                 {overviewData.map((_, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend verticalAlign="bottom" height={36} />
//             </PieChart>
//           ) : (
//             <p>No overview data available</p>
//           )}
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4 text-red-600">Financial Summary</h2>
//           {financialData.length > 0 ? (
//             <BarChart width={500} height={300} data={financialData}>
//               <XAxis dataKey="name" />
//               <YAxis tickFormatter={(value) => `$${value}`} />
//               <Tooltip formatter={(value) => `$${value}`} />
//               <Legend />
//               <Bar dataKey="amount" fill="#82ca9d" barSize={60} />
//             </BarChart>
//           ) : (
//             <p>No financial data available</p>
//           )}
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
//         <h2 className="text-2xl font-semibold mb-4 text-purple-600">Appointment Trends</h2>
//         {overviewData.length > 0 ? (
//           <LineChart width={800} height={300} data={overviewData}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
//           </LineChart>
//         ) : (
//           <p>No trend data available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;


import React, { useEffect } from 'react';
import { useGetHospitalOverviewQuery, useGetFinancialSummaryQuery } from '../features/reports/reportsAPI';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#ff6384'];

const DashboardHome: React.FC = () => {
  const { data: overview, error: overviewError, isLoading: overviewLoading, refetch: refetchOverview } = useGetHospitalOverviewQuery({});
  const { data: financial, error: financialError, isLoading: financialLoading, refetch: refetchFinancial } = useGetFinancialSummaryQuery({});

  useEffect(() => {
    const interval = setInterval(() => {
      refetchOverview();
      refetchFinancial();
    }, 30000);

    return () => clearInterval(interval);
  }, [refetchOverview, refetchFinancial]);

  if (overviewLoading || financialLoading) return <div>Loading...</div>;

  const getErrorMessage = (error: unknown) => {
    if (error && typeof error === 'object' && 'data' in error && typeof error.data === 'string') {
      return error.data;
    }
    return 'An unexpected error occurred';
  };

  if (overviewError || financialError) {
    console.error('Overview Error:', overviewError);
    console.error('Financial Error:', financialError);

    return (
      <div className="text-red-600 p-4 bg-red-100 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Error loading reports</h2>
        {overviewError && <p>Overview Error: {getErrorMessage(overviewError)}</p>}
        {financialError && <p>Financial Error: {getErrorMessage(financialError)}</p>}
      </div>
    );
  }

  const overviewData = overview ? [
    { name: 'Patients', value: overview.total_patients || 0 },
    { name: 'Doctors', value: overview.total_doctors || 0 },
    { name: 'Staff', value: overview.total_staff || 0 },
    { name: 'Appointments', value: overview.total_appointments || 0 },
    { name: 'Medicines', value: overview.total_medicines || 0 }
  ] : [];

  const financialData = financial ? [
    { name: 'Total Earnings', amount: financial.total_earnings || 0 },
    { name: 'Total Paid', amount: financial.total_paid || 0 },
    { name: 'Total Pending', amount: financial.total_pending || 0 }
  ] : [];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Hospital Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Hospital Overview</h2>
          {overviewData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={overviewData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
                  {overviewData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p>No overview data available</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Financial Summary</h2>
          {financialData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={financialData}>
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `$${value}`} />
                <Tooltip formatter={(value) => `$${value}`} />
                <Legend />
                <Bar dataKey="amount" fill="#82ca9d" barSize={60} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p>No financial data available</p>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Appointment Trends</h2>
        {overviewData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={overviewData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p>No trend data available</p>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
