import React, { useEffect } from 'react';
import { useGetHospitalOverviewQuery, useGetFinancialSummaryQuery } from '../reports/reportsAPI';

const Reports: React.FC = () => {
  const { data: overview, error: overviewError, isLoading: overviewLoading, refetch: refetchOverview } = useGetHospitalOverviewQuery({});
  const { data: financial, error: financialError, isLoading: financialLoading, refetch: refetchFinancial } = useGetFinancialSummaryQuery({});

  useEffect(() => {
    const interval = setInterval(() => {
      refetchOverview();
      refetchFinancial();
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, [refetchOverview, refetchFinancial]);

  if (overviewLoading || financialLoading) return <div>Loading...</div>;
  if (overviewError || financialError) return <div>Error loading reports</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Hospital Reports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Overview Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Hospital Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-blue-800">Total Patients</h3>
              <p className="text-2xl font-bold">{overview?.total_patients}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-green-800">Total Doctors</h3>
              <p className="text-2xl font-bold">{overview?.total_doctors}</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-yellow-800">Total Staff</h3>
              <p className="text-2xl font-bold">{overview?.total_staff}</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-purple-800">Total Appointments</h3>
              <p className="text-2xl font-bold">{overview?.total_appointments}</p>
            </div>
            <div className="bg-pink-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-pink-800">Total Medicines</h3>
              <p className="text-2xl font-bold">{overview?.total_medicines}</p>
            </div>
          </div>
        </div>

        {/* Financial Summary Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Financial Summary</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-red-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-red-800">Total Earnings</h3>
              <p className="text-2xl font-bold">${financial?.total_earnings}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-green-800">Total Paid</h3>
              <p className="text-2xl font-bold">${financial?.total_paid}</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-yellow-800">Total Pending</h3>
              <p className="text-2xl font-bold">${financial?.total_pending}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
