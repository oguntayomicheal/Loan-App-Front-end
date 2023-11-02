import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaSpinner } from 'react-icons/fa';
import '../../assets/styles/LoadingSpinner.css';
import '../../assets/styles/session.css';

const CustomerRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationFailure, setRegistrationFailure] = useState(false);
  const [errorData, setErrorData] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const url = 'http://127.0.0.1:3100/api/v1/customers';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRegistrationFailure(false);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customer: formData }),
      });

      if (response.ok) {
        setRegistrationSuccess(true);
        setLoading(false);
      } else {
        const data = await response.json();
        setErrorData(data.errors);
        setRegistrationFailure(true);
        setLoading(false);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="session_page main_content">
      <h2>Register</h2>
      {registrationSuccess ? (
        <div className="reg_success">
          <p>Registration successful! You can now log in.</p>
          <Link to="/CustomerLogin" className="splash_link">Login</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name:
            <br />
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          {registrationFailure && errorData && errorData.name && (
          <p className="reg_error">
            Name
            {' '}
            {errorData.name[0]}
          </p>
          )}
          <br />
          <label htmlFor="email">
            Email:
            <br />
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {registrationFailure && errorData && errorData.email && (
          <p className="reg_error">
            Email
            {' '}
            {errorData.email[0]}
          </p>
          )}
          <br />
          <label htmlFor="password">
            Password:
            <br />
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>

          {registrationFailure && errorData && errorData.password && (
          <p className="reg_error">
            Password
            {' '}
            {errorData.password[0]}
          </p>
          )}
          <br />
          <label htmlFor="confirm_password">
            Confirm Password:
            <br />
            <input
              id="confirm_password"
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
            />
          </label>
          {registrationFailure && errorData && errorData.password_confirmation && (
          <p className="reg_error">
            Password
            {' '}
            {errorData.password_confirmation[0]}
          </p>
          )}

          {loading && (

          <div className="loading-spinner">
            <FaSpinner className="icon" />
          </div>

          )}
          <br />
          <div className="reg_btns">
            <button type="submit" className="splash_link login_btn">Register</button>
            <Link to="/CustomerLogin" className="splash_link">Login</Link>
          </div>
        </form>
      )}

    </div>
  );
};

export default CustomerRegister;
