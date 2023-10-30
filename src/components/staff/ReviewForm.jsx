import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FaSpinner } from 'react-icons/fa';
import '../../assets/styles/LoadingSpinner.css';

const ReviewForm = ({ loanReviewUrl }) => {
  const [loading, setLoading] = useState(false);
  const [loadingFailure, setLoadingFailure] = useState(false);

  const [formData, setFormData] = useState({
    status: '',
    details: '',
    repayment_schedule: '',
    amount_to_pay: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReviewSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setLoadingFailure(false);

    try {
      const response = await fetch(loanReviewUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reviewedData: formData }),
      });

      if (response.ok) {
        window.location.reload();
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
      {loading && (

      <div className="loading-spinner">
        <FaSpinner className="icon" />
      </div>

      )}

      {loadingFailure && (
      <div>
        <p className="login_error">Server error, kindly resubmit the review.</p>
      </div>
      )}

      <form onSubmit={handleReviewSubmit}>
        <div className="form-group">
          <label htmlFor="status">
            Loan Status
            <select
              type="text"
              id="status"
              name="status"
              placeholder="Enter desired status"
              value={formData.status}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
              <option value="Closed">Closed</option>
              <option value="Pending">Pending</option>

            </select>
          </label>

        </div>
        <div className="form-group">
          <label htmlFor="details">
            <p>Rejected ?, provide reasons. Approved?, Enter loan terms and conditions</p>

            <input
              type="textarea"
              id="details"
              name="details"
              placeholder="Enter further Details"
              value={formData.details}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="amount_to_pay">
            Amount to pay
            <input
              type="number"
              id="amount_to_pay"
              name="amount_to_pay"
              placeholder="Enter the Amount to pay back"
              value={formData.amount_to_pay}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="repayment_schedule">
            Repayment Schedule
            <input
              type="date"
              id="repayment_schedule"
              name="repayment_schedule"
              value={formData.repayment_schedule}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </>

  );
};

export default ReviewForm;

ReviewForm.propTypes = {
  loanReviewUrl: PropTypes.string.isRequired,
};
