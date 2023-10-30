import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const ReviewLoanApplication = () => {
    const [loanDetails, setLoanDetails] = useState({})
  // Use the useParams hook to get the loan loan_loan_id from the URL
  const { loan_id } = useParams();
    const url = `http://localhost:3100/api/v1/staffs/loan_applications/${loan_id}`

    
  // Fetch the details of the loan with the specified loan_id and display it here

  useEffect(() => {
    fetchLoanApplication()
  }, [])

  const fetchLoanApplication = async () => {
    try {
        const response = await fetch(url)
 
        if (response.ok) {
            const data = await response.json()
            setLoanDetails(data)
        }
        
    } catch (error) {
        throw new Error(error);
      } 
  }

  return (
    <div>
      <h2>Loan Details</h2>
      <p>Loan loan_id: {loan_id}</p>
      {/* Display other loan details here */}
    </div>
  );
};

export default ReviewLoanApplication;
