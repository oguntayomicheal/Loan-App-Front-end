import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaSpinner } from 'react-icons/fa';
import '../../assets/styles/LoadingSpinner.css';
import '../../assets/styles/session.css';

const StaffLogin = () => {
  const [staffID, setStaffID] = useState('');

  const [loading, setLoading] = useState(false);
  const [loginFailure, setLoginFailure] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginFailure(false);

    const url = 'http://127.0.0.1:3100/api/v1/staffs/login';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ staff_id: staffID }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('staffData', JSON.stringify(data));
        navigate('/StaffDashBoard');
      } else {
        setLoginFailure(true);
        setLoading(false);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className='session_page main_content'>
      <h1>Staff Login Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          id="staffID"
          name="staffID"
          placeholder="Enter your Staff ID"
          value={staffID}
          onChange={(event) => setStaffID(event.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

      {loading && (

      <div className="loading-spinner">
        <FaSpinner className="icon" />
      </div>

      )}

      {loginFailure && (
      <div>
        Invalid Staff ID
      </div>
      )}

    </div>
  );
};

export default StaffLogin;
