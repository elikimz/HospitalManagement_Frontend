import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetReceiptQuery } from '../patientFeatures/receiptAPI';

const ReceiptPage: React.FC = () => {
  const { paymentId } = useParams<{ paymentId: string }>();

  // Convert paymentId to number if it exists
  const id = paymentId ? Number(paymentId) : 0;
  console.log('Payment ID:', id); // Debugging line

  const { data: receipt, error, isLoading } = useGetReceiptQuery(id);

  if (isLoading) return <div>Loading receipt...</div>;
  if (error) {
    console.error('Error loading receipt:', error); // Debugging line
    return <div>Error loading receipt.</div>;
  }

  if (!receipt) {
    return <div>No receipt data available.</div>;
  }

  console.log('Receipt Data:', receipt); // Debugging line

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>{receipt.hospitalName}</h1>
      <p>{receipt.hospitalAddress}</p>
      <p>Contact: {receipt.hospitalContact}</p>
      <hr />
      <h2>Payment Receipt</h2>
      <p>
        <strong>Patient:</strong> {receipt.patientName} (ID: {receipt.patientId})
      </p>
      <p>
        <strong>Payment ID:</strong> {receipt.paymentId}
      </p>
      <p>
        <strong>Date:</strong> {new Date(receipt.paymentDate).toLocaleString()}
      </p>
      <p>
        <strong>Method:</strong> {receipt.paymentMethod}
      </p>
      <p>
        <strong>Amount:</strong> ${receipt.amount.toFixed(2)}
      </p>
      <p>{receipt.notes}</p>
    </div>
  );
};

export default ReceiptPage;
