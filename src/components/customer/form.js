import React, { useState, useEffect } from 'react';

function LoanApplicationsList() {
  const [loanApplications, setLoanApplications] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'http://localhost:3100/api/v1/staffs/loan_applications';

    // Make an HTTP GET request using the fetch API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Update the loanApplications state with the data from the API
        setLoanApplications(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures the effect runs once

  return (
    <div>
      <h1>Loan Applications</h1>
      <ul>
        {loanApplications.map((loanApplication) => (
          <li key={loanApplication.id}>
            <p>Status: {loanApplication.status}</p>
            <p>Details: {loanApplication.details}</p>
            <p>Repayment Schedule: {loanApplication.repayment_schedule}</p>
            <p>Amount to Pay: {loanApplication.amount_to_pay}</p>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LoanApplicationsList;
