import React, { useState } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

import { FaSpinner } from 'react-icons/fa';
import '../../assets/styles/LoadingSpinner.css';

const LoanApplicationForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadingFailure, setLoadingFailure] = useState(false);

  const customerDetails = JSON.parse(localStorage.getItem('userData'));
  const customerID = customerDetails.id;

  const [formData, setFormData] = useState({
    loan_amount: '',
    purpose: '',
    repayment_preferences: '',
    customer_id: customerID,
    status: 'nil',
    details: 'nil',
    repayment_schedule: 'nil',
    amount_to_pay: 'nil'
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const url = 'http://127.0.0.1:3100/api/v1/customers';

  const loanUrl = `${url}/loan_applications`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setLoadingFailure(false);

    try {
      const response = await fetch(loanUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ loanDetails: formData }),
      });

      if (response.ok) {
        // const data = await response.json();
        navigate('/LoanStatus');
      } else {
        setLoadingFailure(true);
        setLoading(false);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (

    <>
      <NavLink to="/LoanStatus" className="each_nav">
        Loan status
      </NavLink>

      <div>
        <h2>Loan Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="loan_amount">
              Loan Amount ($$)
              <input
                type="number"
                id="loan_amount"
                name="loan_amount"
                placeholder="Enter desired loan amount"
                value={formData.loan_amount}
                onChange={handleInputChange}
                required
              />
            </label>

          </div>
          <div className="form-group">
            <label htmlFor="purpose">
              Loan Purpose
              <input
                type="textarea"
                id="purpose"
                name="purpose"
                placeholder="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="repayment_preferences">
              Repayment Preferences
              <input
                type="textarea"
                id="repayment_preferences"
                name="repayment_preferences"
                placeholder="Weekly, monthly..."
                value={formData.repayment_preferences}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <button type="submit">Submit Application</button>
        </form>

        {loading && (

        <div className="loading-spinner">
          <FaSpinner className="icon" />
        </div>

        )}

        {loadingFailure && (
        <div>
          <p className="login_error">Try again.</p>
        </div>
        )}
      </div>

    </>
  );
};

export default LoanApplicationForm;
