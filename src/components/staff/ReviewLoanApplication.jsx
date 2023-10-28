import React from 'react';
import { useParams } from 'react-router-dom';

const ReviewLoanApplication = () => {
  // Use the useParams hook to get the loan ID from the URL
  const { id } = useParams();

  // Fetch the details of the loan with the specified ID and display it here
    
  return (
    <div>
      <h2>Loan Details</h2>
      <p>Loan ID: {id}</p>
      {/* Display other loan details here */}
    </div>
  );
};

export default ReviewLoanApplication;
