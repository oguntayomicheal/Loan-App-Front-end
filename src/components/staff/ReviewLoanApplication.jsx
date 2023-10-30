import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';

const ReviewLoanApplication = () => {
  const [loanDetails, setLoanDetails] = useState({});
  const [serverError, setServerError] = useState(false);
  // Use the useParams hook to get the loan loan_loan_id from the URL
  const { id } = useParams();
  const loanUrl = `http://localhost:3100/api/v1/staffs/loan_applications/${id}`;


  const reviewUrl = `${loanUrl}/review`

 
  // Fetch the details of the loan with the specified loan_id and display it here

  useEffect(() => {
    fetchLoanApplication();
  }, []);

  const fetchLoanApplication = async () => {
    try {
      const response = await fetch(loanUrl);

      if (response.ok) {
        const data = await response.json();
        setLoanDetails(data);
      } else {
        setServerError(true);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  // const handleReviewSubmit = (formData) => {
  //   console.log(formData)
  // }

  return (
    <div>
      {serverError ? (
        <p>
          Server Error, Please kindly refresh this page
        </p>
      )
        : (
          <div>
            <article>
              <h2>Loan Details</h2>
              <p>
                Customer name:
                {loanDetails.customer_name}
              </p>
              <p>
                Loan amount:
                {loanDetails.loan_amount}
              </p>
              <p>
                Application Date:
                {loanDetails.created_at}
              </p>
              <p>
                Purpose:
                {loanDetails.purpose}
              </p>
              <p>
                Repayment preference:
                {loanDetails.repayment_preferences}
              </p>
            </article>

            {/* Add form to review loan details */}

            {/* current reviwed details */}
            <article>
              <h2>Current review details</h2>
              <p>
                Last review date:
                {loanDetails.updated_at}
              </p>
              <p>
                Status:
                {loanDetails.status}
              </p>
              <p>
                Details:
                {loanDetails.details}
              </p>
              <pa>
                Amount to pay back:
                {loanDetails.amount_to_pay}
              </pa>
              <p>
                Repayment Schedule:
                {loanDetails.repayment_schedule}
              </p>

            </article>

            <h2>Loan Application Review Form</h2>

            <ReviewForm loanReviewUrl={reviewUrl}/>

          </div>
        )}

    </div>
  );
};

export default ReviewLoanApplication;
