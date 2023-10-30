import React, { useState } from 'react';

const ReviewForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  };

  return (

    <form onSubmit={handleSubmit}>
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
            required
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
            required
          />
        </label>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
