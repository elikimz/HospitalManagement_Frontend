import React, { useEffect } from 'react';
import { useGetReceiptsQuery, Receipt } from '../patientFeatures/receiptAPI';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

const ReceiptsList: React.FC = () => {
  const { data: receipts, error, isLoading, refetch } = useGetReceiptsQuery();

  useEffect(() => {
    // Set up an interval to refetch data every 3 seconds
    const intervalId = setInterval(() => {
      refetch();
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [refetch]);

  if (isLoading) return <div>Loading receipts...</div>;

  if (error) {
    console.error('Error loading receipts:', error);
    return <div>Error loading receipts. Please try again later.</div>;
  }

  if (!receipts || receipts.length === 0) {
    return <div>No receipts available. Please ensure a payment has been made.</div>;
  }

  // Function to generate a PDF receipt using jsPDF and autoTable
  const handleGenerateReceipt = (receipt: Receipt) => {
    const doc = new jsPDF();

    // Set background color
    doc.setFillColor(240, 240, 240);
    doc.rect(10, 10, 190, 270, 'F');

    // Add hospital details (centered title)
    doc.setFontSize(20);
    doc.text(receipt.hospitalName, 105, 20, { align: 'center' });

    // Add hospital address and contact
    doc.setFontSize(12);
    doc.text(`Address: ${receipt.hospitalAddress}`, 20, 40);
    doc.text(`Contact: ${receipt.hospitalContact}`, 20, 50);

    // Separator line
    doc.line(20, 55, 190, 55);

    // Add receipt title
    doc.setFontSize(16);
    doc.text('Payment Receipt', 105, 70, { align: 'center' });

    // Define the table structure
    const tableData = [
      ['Field', 'Details'],
      [`Patient Name`, receipt.patientName],
      [`Patient ID`, receipt.patientId.toString()],
      [`Payment ID`, receipt.paymentId.toString()],
      [`Date`, new Date(receipt.paymentDate).toLocaleString()],
      [`Payment Method`, receipt.paymentMethod],
      [`Amount`, `$${receipt.amount.toFixed(2)}`],
      [`Notes`, receipt.notes],
    ];

    // Use autoTable to create the table
    autoTable(doc, {
      startY: 80,
      head: [tableData[0]],
      body: tableData.slice(1),
      theme: 'striped',
      headStyles: { fillColor: [52, 73, 94] },
      bodyStyles: { fillColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [221, 221, 221] },
    });

    // Trigger the download of the PDF file
    doc.save(`receipt_${receipt.paymentId}.pdf`);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <h1 className="text-2xl font-bold text-center">Receipts</h1>
      <ul className="space-y-6">
        {receipts.map((receipt: Receipt) => (
          <li key={receipt.paymentId} className="border border-gray-300 p-6 rounded-lg shadow-sm">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{receipt.hospitalName}</h2>
              <p>{receipt.hospitalAddress}</p>
              <p>Contact: {receipt.hospitalContact}</p>
              <hr className="my-4 border-t border-gray-300" />
              <p><strong>Patient:</strong> {receipt.patientName} (ID: {receipt.patientId})</p>
              <p><strong>Payment ID:</strong> {receipt.paymentId}</p>
              <p><strong>Date:</strong> {new Date(receipt.paymentDate).toLocaleString()}</p>
              <p><strong>Method:</strong> {receipt.paymentMethod}</p>
              <p><strong>Amount:</strong> ${receipt.amount.toFixed(2)}</p>
              <p><strong>Notes:</strong> {receipt.notes}</p>
            </div>
            <button
              onClick={() => handleGenerateReceipt(receipt)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Generate PDF Receipt
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReceiptsList;
