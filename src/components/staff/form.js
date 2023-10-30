// ReviewForm.js

import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [reviewStatus, setReviewStatus] = useState('');
  const [reviewDetails, setReviewDetails] = useState('');
  const [reviewAmountToPay, setReviewAmountToPay] = useState('');
  const [reviewRepaymentSchedule, setReviewRepaymentSchedule] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = {
      status: reviewStatus,
      details: reviewDetails,
      amount_to_pay: reviewAmountToPay,
      repayment_schedule: reviewRepaymentSchedule,
    };

    // Pass the review data to the parent component's onSubmit function
    onSubmit(reviewData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <input
          type="text"
          id="status"
          name="status"
          value={reviewStatus}
          onChange={(e) => setReviewStatus(e.target.value)}
        />
      </div>
      {/* Add other form fields for details, amount to pay, and repayment schedule here */}
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
